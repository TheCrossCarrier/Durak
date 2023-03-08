import { useState, useEffect, useContext, createContext } from 'react'
import { useParams } from 'react-router-dom'
import useSocket from '/src/hooks/useSocket'
import WebApp from '@twa-dev/sdk'

import Loader from '/src/components/Loader/Loader'
import TopBar from '/src/components/TopBar/TopBar'
import Players from '/src/components/Players/Players'
import Table from '/src/components/Table/Table'
import Hand from '/src/components/Hand/Hand'
import ActionBar from '/src/components/ActionBar/ActionBar'

import { StyledGame } from './Game.styled'
import { log } from '/src/utils/logger'

export default function Game({ user }) {
  const params = useParams()

  const socket = useSocket('https://durakfortg.click', {
    transports: ['websocket'],
    auth: user,
    query: { id: params.id },
  })

  const [game, setGame] = useState(null)
  const [isInit, setIsInit] = useState(false)

  useEffect(() => {
    if (!socket) {
      return
    }

    socket.on('game', newGame => {
      if (newGame.type === 'error') console.error(newGame.message)

      if (!isInit) setIsInit(true)

      newGame.game = {
        ...newGame.game,
        ...setPlayers(user, newGame.game.players),
      }

      setGame(newGame)
    })
  }, [socket])

  // function startHandler() {}

  // if (false) {
  //   switch (newGame.type) {
  //     //* type - error
  //     case 'error':
  //       throw Error('Socket: ' + newGame.message)

  //     //* type - success
  //     case 'success':
  //       switch (newGame.action) {
  //         //** type - success, action - ready
  //         case 'ready':
  //           break

  //         //** type - success, action - info
  //         case 'info':
  //           break

  //         //** type - success, action - start
  //         case 'start':
  //           startHandler()
  //           break

  //         //** type - success, default for action
  //         default:
  //           console.error(
  //             "Socket: Unexpected value in field 'action': ",
  //             newGame
  //           )
  //       }
  //       break

  //     //* type - move
  //     case 'move':
  //       const mover = newGame.game.players.find(
  //         player => player.id === newGame.by
  //       )

  //       if (!mover)
  //         throw Error(
  //           `Client player id ${newGame.by} is not found in this match.`
  //         )

  //       switch (newGame.action) {
  //         //** type - move, action - ready
  //         case 'ready':
  //           break

  //         //** type - move, default for action
  //         default:
  //           console.error(
  //             "Socket: Unexpected value in field 'action': ",
  //             newGame
  //           )
  //           break
  //       }

  //     default:
  //       // throw Error('Socket: Unexpected response from server: ' + newGame)
  //       console.error("Socket: Unexpected value in field 'type': ", newGame)
  //   }
  // }

  //   console.log('game emit')
  //   // socket.emit('game', { action: 'info' })
  // }, [])

  useEffect(() => {
    if (isInit) {
      WebApp.expand()
      // if (!clientPlayer.current.ready) socket.emit('game', { action: 'ready' })
    }
  }, [isInit])

  useEffect(() => {
    if (game !== null) log.gameState(game)
  }, [game])

  const actionBtnTypes = {
    ready: {
      label: 'Готов',
      onClick: () => '',
    },
  }

  const throwCard = (card, action, boardCellIdx) => {
    const newGame = JSON.parse(JSON.stringify(game))

    const handCardIdx = newGame.game.clientPlayer.cards.findIndex(
      handCard => handCard[0] === card[0] && handCard[1] === card[1]
    )

    if (handCardIdx === -1) {
      console.error(`Could not find ${card[0]} of ${card[1]} in hand.`)
      return
    }

    const thrownCard = newGame.game.clientPlayer.cards.splice(handCardIdx, 1)[0]

    switch (action) {
      case 'attack':
        // TODO: Первый отбой - 5 карт (сумма всех карт у игроков, на столе
        // TODO  и в колоде = величине колоды => отбоя ещё не было)
        if (newGame.game.table.length >= 6) {
          return
        }

        boardCellIdx = newGame.game.table.push([thrownCard]) - 1
        break

      case 'defend':
        if (!newGame.game.table[boardCellIdx]) {
          console.error(`Board cell (${boardCellIdx}) is not exists.`)
          return
        }
        if (newGame.game.table[boardCellIdx].length > 2) {
          console.error(`Board cell (${boardCellIdx}) is full of cards.`)
          return
        }

        newGame.game.table[boardCellIdx].push(thrownCard)
        break

      case 'pass':
        // TODO
        break

      default:
        break
    }

    setGame(newGame)

    const cardToSend = newGame.game.table[boardCellIdx]
    if (action === 'attack') cardToSend[0]

    socket.emit('game', {
      action: 'card',
      card: newGame.game.table[boardCellIdx],
    })
  }

  return (
    <StyledGame>
      {isInit ? (
        game.game.players.length < 5 ? (
          <>
            <TopBar rules={game.game.rules} bet={game.game.bet} />

            <Players players={game.game.otherPlayers} />

            <Table
              cells={game.game.table}
              remainingCards={game.game.remainingCards}
              trump={game.game.trump}
              clientPlayer={game.game.clientPlayer}
              {...{ throwCard }}
            />

            <Hand cards={game.game.clientPlayer.cards} />

            <ActionBar
              actionBtnType={actionBtnTypes.ready}
              player={game.game.clientPlayer}
            />
          </>
        ) : (
          WebApp.showAlert('Комната переполнена.')
        )
      ) : (
        <Loader />
      )}
    </StyledGame>
  )
}

const setPlayers = (user, players) => {
  const otherPlayers = players.map(player => {
    player.username = player.username ?? `${player.name} ${player.last_name}`
    return player
  })

  const clientPlayerIdx = otherPlayers.findIndex(
    otherPlayer => otherPlayer.id === user.id
  )

  if (clientPlayerIdx === -1)
    throw Error(
      `Client player ${user.username ?? ''}(${
        user.id
      }) is not found in this match.`
    )

  const clientPlayer = otherPlayers.splice(clientPlayerIdx, 1)[0]

  return { clientPlayer, otherPlayers }
}

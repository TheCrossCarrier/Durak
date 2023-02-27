import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'
import TopBar from '/src/components/TopBar/TopBar'
import Players from '/src/components/Players/Players'
import Table from '/src/components/Table/Table'
import Hand from '/src/components/Hand/Hand'
import ActionBar from '/src/components/ActionBar/ActionBar'
import { StyledGame } from './Game.styled'

export default function Game({ user }) {
  const location = useLocation()

  const [isConnected, setIsConnected] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [game, setGame] = useState()

  const socket = useRef(
    io('https://durakfortg.click', {
      transports: ['websocket'],
      query: { id: location.pathname.substring(1) }, // 63f4b13f3b35bdc122765b4a
      auth: { id: user.id }, // 305544740
    })
  )

  const clientPlayer = useRef(),
    otherPlayers = useRef()

  useEffect(() => {
    socket.current.on('connect', () => {
      console.info('\nSocket connected: ', socket.current)
      setIsConnected(true)
    })

    socket.current.on('disconnect', () => {
      console.info('\nSocket disconnected: ', socket.current)
      setIsConnected(false)
    })

    socket.current.on('game', response => {
      if (isFetching) setIsFetching(false)

      if (response.type === 'error') throw Error('Socket: ' + response.message)

      setGame(response)
      ;[clientPlayer.current, otherPlayers.current] = setPlayers(
        user,
        response.game.players
      )

      console.info('\nGame state updated: ', response)

      console.info('\nPlayers updated: ')
      console.info('\tClient player: ', clientPlayer.current)
      console.info('\tOther players: ', otherPlayers.current)
    })

    socket.current.emit('game', { action: 'info' })

    return () => {
      socket.current.off('connect')
      socket.current.off('disconnect')
      socket.current.off('game')
    }
  }, [])

  useEffect(() => {
    if (!isFetching && !clientPlayer.current.ready)
      socket.current.emit('game', { action: 'ready' })
  }, [isFetching])

  const actionBtnTypes = {
    ready: {
      label: 'Готов',
      onClick: () => '',
    },
    addCardToHand: {
      label: 'Взять карту',
      onClick: () => '',
    },
  }

  return (
    <StyledGame>
      {!isFetching ? (
        <>
          <TopBar rules={game.game.rules} bet={game.game.bet} />

          <Players players={otherPlayers.current} />

          <Table
            cells={game.game.table}
            remainingCards={game.game.remainingCards}
            trump={game.game.trump}
          />

          <Hand cards={clientPlayer.current.cards} />

          <ActionBar
            actionBtnType={actionBtnTypes.ready}
            player={clientPlayer.current}
          />
        </>
      ) : (
        <h3>Loading..</h3>
      )}
    </StyledGame>
  )
}

const setPlayers = (user, players) => {
  const otherPlayers = [...players]

  const clientPlayerIdx = otherPlayers.findIndex(
    otherPlayer => otherPlayer.id === user.id
  )

  if (clientPlayerIdx === -1)
    throw Error('Client player is not found in this match.')

  const clientPlayer = otherPlayers.splice(clientPlayerIdx, 1)[0]

  return [clientPlayer, otherPlayers]
}

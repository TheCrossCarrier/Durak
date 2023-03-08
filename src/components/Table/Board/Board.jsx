import BoardCell from './BoardCell'
import { StyledBoard } from './Board.styled'

export default function Board({ cells, clientPlayer, throwCard }) {
  const dragOverHandler = event => {
    event.preventDefault()
    // console.log(event.target)
  }

  // const dropContainerHandler = (event, idx) => {

  // }

  const dropHandler = (event, idx) => {
    event.preventDefault()
    event.stopPropagation()

    console.log(event.target, idx);

    const thrownCard = JSON.parse(event.dataTransfer.getData('text/plain'))

    switch (clientPlayer.role) {
      case 'attacker':
        throwCard(thrownCard, 'attack')
        break

      case 'nextAttacker':
        break

      case 'defender':
        throwCard(thrownCard, 'defend', idx)
        break

      default:
        break
    }
  }

  return (
    <StyledBoard
      onDragOver={event => dragOverHandler(event)}
      onDrop={event => dropHandler(event, -1)}
    >
      {cells.map((cell, idx) => (
        <BoardCell
          bottomCard={cell[0]}
          topCard={cell[1]}
          key={idx}
          onDragOver={event => dragOverHandler(event)}
          onDrop={event => dropHandler(event, idx)}
        />
      ))}
    </StyledBoard>
  )
}

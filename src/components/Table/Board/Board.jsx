import BoardCell from './BoardCell'
import { StyledBoard } from './Board.styled'

export default function Board({ cells }) {
  return (
    <StyledBoard>
      {cells.map((cell, idx) => (
        <BoardCell bottomCard={cell[0]} topCard={cell[1]} key={idx} />
      ))}
    </StyledBoard>
  )
}

import Deck from './Deck/Deck'
import Board from './Board/Board'
import { StyledTable } from './Table.styled'

export default function Table({
  cells,
  remainingCards,
  trump,
  clientPlayer,
  throwCard,
}) {
  return (
    <StyledTable>
      <Deck {...{ remainingCards, trump }} />
      <Board {...{ cells, clientPlayer, throwCard }} />
      <div></div>
    </StyledTable>
  )
}

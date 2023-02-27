import Deck from './Deck/Deck'
import Board from './Board/Board'
import { StyledTable } from './Table.styled'

export default function Table({ cells, remainingCards, trump }) {
  return (
    <StyledTable>
      <Deck remainingCards={remainingCards} trump={trump} />
      <Board cells={cells} />
      <div></div>
    </StyledTable>
  )
}

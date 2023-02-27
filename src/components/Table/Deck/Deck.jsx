import {
  StyledDeck,
  RemainingQuantity,
  Cards,
  TopCard,
  TrumpCard,
} from './Deck.styled'

function dealCard() {} //?

export default function Deck({ /* deckSize, ??? */ remainingCards, trump }) {
  return (
    <StyledDeck>
      <RemainingQuantity>{remainingCards}</RemainingQuantity>
      <Cards>
        <TopCard variety={[2, 'clubs']} cardWidth='60' flipped />
        <TrumpCard variety={trump} cardWidth='60' />
      </Cards>
    </StyledDeck>
  )
}

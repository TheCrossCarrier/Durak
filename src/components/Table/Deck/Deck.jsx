import {
  StyledDeck,
  RemainingQuantity,
  Cards,
  TopCard,
  TrumpCard,
} from './Deck.styled'

// function dealCard() {} //?

export default function Deck({ /* deckSize, ??? */ remainingCards, trump }) {
  return (
    <StyledDeck>
      {remainingCards && trump && (
        <>
          <RemainingQuantity>{remainingCards}</RemainingQuantity>
          <Cards>
            <TopCard flipped cardWidth='60' />
            <TrumpCard variety={trump} cardWidth='60' />
          </Cards>
        </>
      )}
    </StyledDeck>
  )
}

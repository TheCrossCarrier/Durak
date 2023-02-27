import { StyledHand, CardInHand } from './Hand.styled'

export default function Hand({ className, cards, flipped, draggable }) {
  return (
    <StyledHand className={className}>
      {cards.map((card, idx) => (
        <CardInHand
          as='li'
          cardWidth='80'
          zIndex={idx}
          variety={card}
          flipped={flipped}
          draggable={draggable ?? !flipped}
          key={idx}
        />
      ))}
    </StyledHand>
  )
}

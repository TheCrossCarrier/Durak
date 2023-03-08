import { StyledOtherHand, CardInHand } from './OtherHand.styled'

export default function OtherHand({ cards }) {
  return (
    <StyledOtherHand>
      {[...Array(cards).keys()].map((_, idx) => (
        <CardInHand as='li' flipped cardWidth='30' key={idx} />
      ))}
    </StyledOtherHand>
  )
}

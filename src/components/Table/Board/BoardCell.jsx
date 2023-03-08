import {
  StyledBoardCell,
  CardsContainer,
  CardOnBoard,
} from './BoardCell.styled'

export default function BoardCell({ bottomCard, topCard, ...props }) {
  return (
    <StyledBoardCell {...props}>
      <CardsContainer>
        <CardOnBoard variety={bottomCard} cardWidth='60' />

        {topCard && <CardOnBoard variety={topCard} cardWidth='60' />}
      </CardsContainer>
    </StyledBoardCell>
  )
}

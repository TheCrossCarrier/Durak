import styled from 'styled-components'
import Card from '/src/styles/Card'

export const StyledBoardCell = styled.li`
  flex: 0 0 calc(100% / 3);
  padding: 20px 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardsContainer = styled.div`
  position: relative;
`

export const CardOnBoard = styled(Card)`
  &:first-child {
    transform: translateX(6px) rotate(-5deg);
  }

  &:nth-child(2) {
    position: absolute;
    top: 8px;
    /* right: 0; */
    left: 20%;
    transform: translateX(6px) rotate(12deg);
  }
`

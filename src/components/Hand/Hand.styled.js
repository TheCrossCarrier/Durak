import styled from 'styled-components'
import Card from '/src/styles/Card'

export const StyledHand = styled.ul`
  margin-bottom: -20px;
  height: ${props => props.cardHeight}px;
  display: flex;
  justify-content: center;
  list-style: none;
`

export const CardInHand = styled(Card)`
  --offset-y: 25%;
  transform: translateY(var(--offset-y));
  transition: transform 170ms ease;

  &:hover {
    transform: translateY(calc(var(--offset-y) - 10px));
  }

  ${StyledHand} > & + & {
    margin-left: -40px;
  }
`

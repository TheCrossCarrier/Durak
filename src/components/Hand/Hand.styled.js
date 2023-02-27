import styled from 'styled-components'
import Card from '/src/styles/Card'

export const StyledHand = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`
export const CardInHand = styled(Card)`
  transform: translateY(40%);
  transition: transform 170ms ease;

  &:hover {
    transform: translateY(calc(40% - 10px));
  }

  ${StyledHand} > & + & {
    z-index: ${({ zIndex }) => zIndex};
    margin-left: -40px;
  }
`

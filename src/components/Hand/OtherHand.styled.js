import styled from 'styled-components'
import Card from '/src/styles/Card'

export const StyledOtherHand = styled.ul`
  position: relative;
  z-index: -2;
  display: flex;
  justify-content: center;
  list-style: none;
`

export const CardInHand = styled(Card)`
  box-shadow: 0 0 3px gray;
  /* transform: translateY(-20px); */
  margin-top: -20px;

  ${StyledOtherHand} > & + & {
    /* z-index: ${({ zIndex }) => zIndex}; не работает */
    margin-left: -40px;
  }
`

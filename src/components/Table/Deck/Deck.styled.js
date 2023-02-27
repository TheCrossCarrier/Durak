import styled from 'styled-components'
import Card from '/src/styles/Card'

export const StyledDeck = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
`

export const RemainingQuantity = styled.div`
  padding-left: 2px;
  font-size: 26px;
  color: var(--c-white);
`

export const Cards = styled.div`
  position: relative;
  margin-left: -62px;
  margin-right: 10px;
  transform: rotate(17deg);
`

export const TopCard = styled(Card)``

export const TrumpCard = styled(Card)`
  position: absolute;
  z-index: -1;
  top: 50%;
  right: -32px;
  transform: translateY(-50%) rotate(90deg);
`

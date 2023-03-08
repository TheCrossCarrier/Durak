import styled from 'styled-components'
import Icon from '/src/styles/Icon'

export const StyledTopBar = styled.div`
  display: flex;

  & > :first-child {
    flex: 0 1 50%;
  }

  & > :last-child {
    flex: 0 1 50%;
  }
`

export const RuleIcons = styled.ul`
  flex: 0 1;
  margin: min(1.8vw, 15px);
  display: flex;
  column-gap: min(2.2vw, 30px);
  list-style: none;
`

export const RuleIcon = styled.div`
  width: min(7.2vw, 22px);
  height: min(7.2vw, 22px);

  & > * {
    width: 100%;
    height: 100%;
    color: var(--c-white);
  }
`

export const Bet = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 0.3em;
  font-size: clamp(20px, 5vw, 30px);
  line-height: 1;
  color: var(--c-white);
`

export const BetIcon = styled(Icon)`
  width: 1.7em;
  height: 1.7em;
`

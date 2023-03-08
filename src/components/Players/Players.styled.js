import styled from 'styled-components'

export const StyledPlayers = styled.ul`
  margin-top: 5px;
  display: flex;
  justify-content: space-around;

  & > :first-child,
  & > :last-child {
    margin-top: calc(var(--margin, var(--margin-top, 0)) + 20px);
  }

  & > :nth-child(2),
  & > :nth-last-child(2) {
    margin-top: calc(var(--margin, var(--margin-top, 0)) + 10px);
  }
`

export const PlayerCell = styled.li``

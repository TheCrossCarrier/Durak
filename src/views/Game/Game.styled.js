import styled from 'styled-components'

export const StyledGame = styled.div`
  position: relative;
  z-index: 0;
  /* width: 100%; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background: url(${({ theme }) => theme.gameBg}) center repeat; */
  background: var(--c-navy);
`

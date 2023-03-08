import styled from 'styled-components'

export const StyledActionBar = styled.div`
  position: relative;
  z-index: 100;
  padding: 0 10px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  background: linear-gradient(to bottom, white 0%, var(--c-white) 100%);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  box-shadow: 0 2px 10px #656660;

  /* ButtonWrapper */
  & > :first-child {
    flex: 0 1 50%;
  }

  & > :last-child {
    flex: 0 1 50%;
  }
`

export const ButtonWrapper = styled.div`
  height: 50px;
`

export const Button = styled.button`
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 3px 10px #cdcfc1;
  font-family: inherit;
  font-size: 24px;
  font-weight: var(--fw-normal);
  line-height: 1;
  color: var(--c-red);
  cursor: pointer;
`

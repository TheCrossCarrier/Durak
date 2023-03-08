import styled from 'styled-components'
import playerDefaultImg from '/src/assets/player_default.png'

export const PlayerWrapper = styled.div`
  --outline-width: 6px;
  --margin: var(--outline-width);
  margin: var(--margin);
  flex: none;
  position: relative;
  width: 46px;
  height: 46px;
`

export const StyledPlayer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 7px hsl(0, 0%, 26%);
  background-image: url('${props => props.img ?? playerDefaultImg}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
  cursor: pointer;

  /* Outline timer */
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    transform: translate(
      calc(0px - var(--outline-width)),
      calc(0px - var(--outline-width))
    );

    width: calc(100% + calc(var(--outline-width) * 2));
    height: calc(100% + calc(var(--outline-width) * 2));
    border-radius: 20%;
    background: none;
    ${props => props.gameRole === 'defender' && 'background: var(--c-green);'}
    ${props => props.gameRole === 'attacker' && 'background: var(--c-red);'}
  }
`

export const Username = styled.div`
  --height: 1.1em;
  align-self: flex-end;
  padding: 0 2px;
  width: 100%;
  height: var(--height);
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  background: rgba(128, 128, 128, 0.8);
  font-size: 11px;
  font-weight: 300; //? 400
  text-align: center;
  line-height: var(--height);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
`

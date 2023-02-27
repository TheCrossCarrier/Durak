import styled from 'styled-components'
import playerDefaultImg from '/src/assets/player_default.png'

export default styled.div`
  --stroke-width: 6px;
  --margin: var(--stroke-width);
  flex: none;
  position: relative;
  margin: var(--margin);
  width: 46px;
  height: 46px;
  display: flex;
  border-radius: 8px;
  /* box-shadow: 0 0 10px #cdcfc1; */
  background: url(${props => props.img ?? playerDefaultImg}) center/cover
      no-repeat,
    white;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    transform: translate(
      calc(0px - var(--stroke-width)),
      calc(0px - var(--stroke-width))
    );
    width: calc(100% + calc(var(--stroke-width) * 2));
    height: calc(100% + calc(var(--stroke-width) * 2));
    border-radius: 20%;
    background: var(--c-green);
  }

  & > * {
    --height: 1.5em;
    align-self: flex-end;
    padding: 2px 2.5px;
    width: 100%;
    height: var(--height);
    display: block;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background: rgba(128, 128, 128, 0.8);
    font-size: 12px;
    text-align: center;
    line-height: calc(var(--height) - 4px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
  }
`

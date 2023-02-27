import { StyledActionBar, Button } from './ActionBar.styled'
import Player from '/src/styles/Player'

export default function ActionBar({ actionBtnType, player }) {
  return (
    <StyledActionBar>
      <div>
        <Button onClick={actionBtnType.onClick}>{actionBtnType.label}</Button>
      </div>

      <Player img={player.img}>
        <span>{player.name}</span>
      </Player>

      <div></div>
    </StyledActionBar>
  )
}

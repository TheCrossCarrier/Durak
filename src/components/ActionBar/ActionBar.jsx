import { StyledActionBar, ButtonWrapper, Button } from './ActionBar.styled'
import Player from '/src/components/Player/Player'

export default function ActionBar({ actionBtnType, player }) {
  return (
    <StyledActionBar>
      <ButtonWrapper>
        <Button onClick={actionBtnType.onClick}>{actionBtnType.label}</Button>
      </ButtonWrapper>

      <Player
        username={player.username}
        img={player.img}
        gameRole={player.role}
      />

      {/* //? надо ли */}
      <div></div>
    </StyledActionBar>
  )
}

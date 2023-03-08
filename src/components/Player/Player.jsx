import { StyledPlayer, PlayerWrapper, Username } from './Player.styled'

export default function Player({ className, username, ...props }) {
  return (
    <PlayerWrapper {...{className}} {...props}>
      <StyledPlayer {...props}>
        <Username {...props}>{username}</Username>
      </StyledPlayer>
    </PlayerWrapper>
  )
}

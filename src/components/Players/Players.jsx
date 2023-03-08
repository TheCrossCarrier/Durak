import { StyledPlayers, PlayerCell } from './Players.styled'
import Player from '/src/components/Player/Player'
import PlayerHand from '../Hand/OtherHand'

export default function Players({ players }) {
  return (
    <StyledPlayers>
      {players.map((player, idx) => (
        <PlayerCell key={idx}>
          <Player
            username={player.username}
            img={player.img}
            gameRole={player.role}
          />
          <PlayerHand cards={player.cards} />
        </PlayerCell>
      ))}
    </StyledPlayers>
  )
}

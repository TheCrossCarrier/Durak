import Hand from '../Hand/Hand'
import { StyledPlayers } from './Players.styled'
import Player from '/src/styles/Player'

export default function Players({ players }) {
  return (
    <StyledPlayers>
      {players.map((player, idx) => (
        <Player as='li' img={player.img} key={idx}>
          <span>{player.name}</span>
        </Player>
        // {/* <Hand cards={player.cards} key={'m' + idx} /> */}
      ))}
    </StyledPlayers>
  )
}

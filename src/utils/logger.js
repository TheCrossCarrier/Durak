export const log = {
  gameState: state => {
    console.info('\nGame state updated: ', state)
  },

  players: (clientPlayer, otherPlayers) => {
    console.info('\nPlayers updated: ')
    console.info('\tClient player: ', clientPlayer)
    console.info('\tOther players: ', otherPlayers)
  },

  socket: {
    created: socket => {
      console.info('\nSocket created: ', socket)
    },

    connected: socket => {
      console.info('\nSocket connected: ', socket)
    },

    disconnected: reason => {
      console.warn('\nSocket disconnected: ', reason)
    },

    disconnected: error => {
      console.error('\nSocket connection ' + error)
    },

    io: {
      error: error => {
        console.error('\nSocket Manager ' + error)
      },

      pinged: () => {
        console.info('\nSocket pinged from the server.')
      },

      reconnected: attempt => {
        console.info(
          '\nSocket reconnection successful. ' +
            `It took ${attempt} attempt${attempt > 1 ? 's' : ''}.`
        )
      },

      reconnectionAttempt: attempt => {
        console.info(`\nSocket reconnection attempt. (${attempt})`)
      },

      reconnectionError: error => {
        console.error('\nSocket reconnection attempt ' + error)
      },

      reconnectionFailed: () => {
        console.info('\nSocket reconnection attempt failed.')
      },
    },
  },
}

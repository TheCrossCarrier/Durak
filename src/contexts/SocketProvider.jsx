import { useState, useEffect, useContext, createContext } from 'react'
import { io } from 'socket.io-client'
import { log } from '/src/utils/logger'

const SocketContext = createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ url, opts, children }) {
  const [socket, setSocket] = useState(null)
  console.log('asdad');
  useEffect(() => {
    const newSocket = io(url, opts)
    console.log(newSocket)

    newSocket.on('connect', () => console.log('Connectied', socket))

    setSocket(newSocket)

    return () => {
      newSocket.close()
      newSocket.off()
    }
  }, [url, opts])

  // useEffect(() => {
  //   const newSocket = io(url, options)
  //   log.socket.created(newSocket)

  //   //* Handling default Socket.IO events
  //   //** Socket events
  //   newSocket.on('connect', () => {
  //     log.socket.connected(newSocket)
  //   })

  //   newSocket.on('disconnect', reason => {
  //     log.socket.disconnected(reason)

  //     if (reason === 'io server disconnect') newSocket.connect()
  //   })

  //   newSocket.on('connect_error', error => {
  //     log.socket.connectionError(error)
  //   })

  //   //** Manager events
  //   newSocket.io.on('error', error => {
  //     log.socket.io.error(error)
  //   })

  //   newSocket.io.on('ping', () => {
  //     log.socket.io.pinged()
  //   })

  //   newSocket.io.on('reconnect', attempt => {
  //     log.socket.io.reconnected(attempt)
  //   })

  //   newSocket.io.on('reconnect_attempt', attempt => {
  //     log.socket.io.reconnectionAttempt(attempt)
  //   })

  //   newSocket.io.on('reconnect_error', error => {
  //     log.socket.io.reconnectionError(error)
  //   })

  //   newSocket.io.on('reconnect_failed', () => {
  //     log.socket.io.reconnectionFailed()
  //   })

  //   setSocket(newSocket)

  //   return () => {
  //     newSocket.disconnect()
  //     newSocket.off()
  //   }
  // }, [])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

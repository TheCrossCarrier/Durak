import { useState, useEffect } from 'react'
import { StyledLoader } from './Loader.styled'

export default function Loader() {
  const [dot, setDot] = useState(false)

  useEffect(() => {
    const loading = setInterval(() => setDot(!dot), 500)

    return () => clearInterval(loading)
  }, [dot])

  return (
    <StyledLoader>
      <br />
      <center>Loading..{dot ? '.' : ''}</center>
    </StyledLoader>
  )
}

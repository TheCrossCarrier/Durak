import styled from 'styled-components'

export default styled.span`
  width: 32px;
  height: 32px;
  display: inline-block;
  background: no-repeat center / ${props => (props.cover ? 'cover' : 'contain')}
    url(${({ img }) => img});
`

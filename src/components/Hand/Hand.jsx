import { StyledHand, CardInHand } from './Hand.styled'

export default function Hand({ cards }) {
  const dragStartHandler = (event, card) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(card))
    // event.dataTransfer.setDragImage(new Image(), 0, 0)
  }

  // const dragHandler = event => {
  //   // event.preventDefault()
  //   event.target.style.cursor = 'grab'
  //   event.currentTarget.style.cursor = 'grab'

  //   console.log(event)
  // }

  // const dragEndHandler = event => {
  //   // event.preventDefault()
  //   event.target.style.cursor = 'grab'
  //   event.currentTarget.style.cursor = 'grab'

  //   console.log(event)
  // }

  // const dragOverHandler = (event, card) => {
  //   event.preventDefault()
  //   event.dataTransfer.dropEffect = 'grab'
  //   event.target.style.cursor = 'grab'
  //   event.currentTarget.style.cursor = 'grab'

  // console.log(card)
  // }

  // const dropHandler = (event, card) => {
  // event.target.style.cursor = 'grab'
  // event.currentTarget.style.cursor = 'grab'

  //   event.preventDefault()
  //   console.log(card)
  // }

  return (
    <StyledHand cardHeight='114'>
      {cards.map((card, idx) => (
        <CardInHand
          as='li'
          variety={card}
          cardHeight='114'
          key={idx}
          draggable='true'
          onDragStart={event => dragStartHandler(event, card)}
          // onDrag={event => dragHandler(event)}
          // onDragEnd={event => dragEndHandler(event)}
          // onDragOver={event => dragOverHandler(event, card)}
          // onDrop={event => dropHandler(event, card)}
          // style={{ zIndex: idx }}
        />
      ))}
    </StyledHand>
  )
}

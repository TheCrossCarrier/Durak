import styled from 'styled-components'
import sprite from '/src/assets/deck.png'
import cardBack from '/src/assets/card-back_default.png'

const spriteWidth = 4583, //px
  spriteHeight = 1831, //px
  spriteCardWidth = 318.1, //px
  spriteCardHeight = 450, //px
  spriteCardBorderRadius = 14, //px
  spriteGap = 10 //px

export default styled.div.attrs(({ cardWidth, cardHeight, variety }) => {
  let width = parseFloat(cardWidth),
    height = parseFloat(cardHeight)

  if (width || height) {
    if (!width) width = (spriteCardWidth / spriteCardHeight) * height
    if (!height) height = (spriteCardHeight / spriteCardWidth) * width
  } else if (!width && !height) {
    width = spriteCardWidth
    height = spriteCardHeight
  }

  if (width < 0 || height < 0)
    throw Error('Width and height must be greater than zero.')

  if (variety[0] < 2 || variety[0] > 14)
    throw Error('Card value must be from 2 to 14. Given: ' + variety[0])

  const suitIdx = ['diamonds', 'clubs', 'hearts', 'spades'].indexOf(variety[1])
  if (suitIdx === -1)
    throw Error(
      'Unexpected card suit. Available suits: ' +
        'diamonds, clubs, hearts, spades. Given: ' +
        variety[1]
    )

  const widthDifference = Math.abs(spriteCardWidth - width),
    heightDifference = Math.abs(spriteCardHeight - height)

  const factor =
    widthDifference > heightDifference
      ? width / spriteCardWidth
      : height / spriteCardHeight

  return {
    cardWidth: width,
    cardHeight: height,
    cardBorderRadius: spriteCardBorderRadius * factor,
    offsetX: (spriteCardWidth + spriteGap) * (variety[0] - 2) * factor,
    offsetY: (spriteCardHeight + spriteGap) * suitIdx * factor,
    bgWidth: spriteWidth * factor,
  }
})`
  flex: 0 0 ${props => props.cardWidth}px;
  width: ${props => props.cardWidth}px;
  height: ${props => props.cardHeight}px;
  border-radius: ${props => props.cardBorderRadius}px;
  background-color: ${({ bgColor }) =>
    bgColor && bgColor !== '' ? bgColor : 'white'};

  background-image: url('${sprite}');
  background-repeat: no-repeat;
  background-position-x: ${props => -props.offsetX}px;
  background-position-y: ${props => -props.offsetY}px;
  background-size: ${props => props.bgWidth}px;

  ${props => props.flipped && `background: url('${cardBack}') center / cover;`}

  box-shadow: 0 2px 10px #656660;
`

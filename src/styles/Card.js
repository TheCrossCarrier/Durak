import styled from 'styled-components'
import sprite from '/src/assets/deck.png'
import cardBack from '/src/assets/card-back_default.png'

// In pixels:
const spriteWidth = 4583,
  spriteHeight = 1831,
  spriteCardWidth = 318.1,
  spriteCardHeight = 450,
  spriteCardBorderRadius = 14,
  spriteGap = 10

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

  if (!variety?.length) variety = undefined
  let suitIdx
  if (variety) {
    if (variety[0] < 2 || variety[0] > 14)
      throw Error('Card value must be from 2 to 14. Given: ' + variety[0])

    suitIdx = ['diamonds', 'clubs', 'hearts', 'spades'].indexOf(
      variety[1]
    )
    if (suitIdx === -1)
      throw Error(
        'Unexpected card suit. Available suits: ' +
          'diamonds, clubs, hearts, spades. Given: ' +
          variety[1]
      )
  }

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
    offsetX: variety
      ? (spriteCardWidth + spriteGap) * (variety[0] - 2) * factor
      : null,
    offsetY: suitIdx ? (spriteCardHeight + spriteGap) * suitIdx * factor : null,
    bgWidth: spriteWidth * factor,
    variety,
  }
})`
  flex: 0 0 ${props => props.cardWidth}px;
  width: ${props => props.cardWidth}px;
  height: ${props => props.cardHeight}px;
  border-radius: ${props => props.cardBorderRadius}px;
  background-color: ${({ bgColor }) =>
    bgColor && bgColor !== '' ? bgColor : 'white'};

  ${({ variety, offsetX, offsetY, bgWidth }) =>
    variety &&
    `
      background-image: url('${sprite}');
      background-repeat: no-repeat;
      background-position-x: ${-offsetX}px;
      background-position-y: ${-offsetY}px;
      background-size: ${bgWidth}px;
  `}

  ${props => props.flipped && `background: url('${cardBack}') center / cover;`}

  box-shadow: 0 2px 10px #656660;
`

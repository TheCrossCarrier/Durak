import { useEffect } from 'react'
import {
  StyledTopBar,
  RuleIcons,
  RuleIcon,
  Bet,
  BetIcon,
} from './TopBar.styled'
import {
  GiCardExchange,
  GiBandit,
  GiShakingHands,
  GiContract,
  GiCardJoker,
} from 'react-icons/gi'
import { FaPeopleArrows, FaBalanceScale, FaForward } from 'react-icons/fa'
import cashIcon from '/src/assets/cash.png'

export default function TopBar({ rules, bet }) {
  // for (let [key, value] of Object.entries(rules)) {
  //   rules[key] = Boolean(Number(value))
  // }

  return (
    <StyledTopBar>
      <div></div>

      <RuleIcons>
        {rules.passing && (
          <RuleIcon as='li'>
            <GiCardExchange />
          </RuleIcon>
        )}

        {rules.throwOnlyNeighbors ? (
          <RuleIcon as='li'>
            <FaPeopleArrows />
          </RuleIcon>
        ) : (
          <RuleIcon as='li'>
            <GiContract />
          </RuleIcon>
        )}

        {rules.cheating ? (
          <RuleIcon as='li'>
            <GiBandit />
          </RuleIcon>
        ) : (
          <RuleIcon as='li'>
            <GiShakingHands />
          </RuleIcon>
        )}

        {rules.draws ? (
          <RuleIcon as='li'>
            <FaBalanceScale />
          </RuleIcon>
        ) : (
          <RuleIcon as='li'>
            <GiCardJoker />
          </RuleIcon>
        )}

        {rules.rapid && (
          <RuleIcon as='li'>
            <FaForward />
          </RuleIcon>
        )}
      </RuleIcons>

      <Bet>
        <span>{bet}</span>
        <BetIcon img={cashIcon} />
      </Bet>
    </StyledTopBar>
  )
}

import styled from 'styled-components';
import {motion} from 'framer-motion'

export const Header = styled(motion.h1)`
  font-size: 4em;
  border-bottom: 3px solid white;
  color: var(--le-cyan)
`

export const CyanButton = styled(motion.button)`
  padding: .3em;
  background-color: var(--le-cyan);
  border: 1px solid #2191af;
  color: white;
`
export const ClearButton = styled(motion.button)`
  padding: .3em;
  background-color: transparent;
  border:2px solid transparent;
  color: var(--le-cyan);

  &:hover {
    border: 2px solid #2191af;
  }
`

export const StyledP = styled(motion.p)`
  color: white;
  line-height: 2;
`

export const StyledCard = styled(motion.div)`
  width: 100%;
`
export const CardBottom = styled.div`
  width:100%;
  background-color: var(--le-lightgrey)
  `
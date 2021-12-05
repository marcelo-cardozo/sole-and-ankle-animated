import styled from "styled-components/macro";
import {REDUCED_MOTION, WEIGHTS} from "../../constants";

export default function NavLinkV2({children, ...rest}) {
  return (
    <Wrapper {...rest}>
      <LineTop />
      <ContentDefault>{children}</ContentDefault>
      <ContentHover>{children}</ContentHover>
      <LineBottom />
    </Wrapper>
  )
}

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px;
  color: var(--color-gray-900);

  @media ${REDUCED_MOTION.NO_PREFERENCE} and (hover: hover) {
    &:focus  {
      outline: none;
    }

    &:focus, &:hover {
      color: var(--color-secondary);
    }
  }
  
  &:first-of-type {
    color: var(--color-primary);
  }
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  height: 3px;
  transition: opacity 350ms ease-in, transform 350ms ease-in;
  opacity: 0;
  background-color: currentColor;

  @media ${REDUCED_MOTION.NO_PREFERENCE} and (hover: hover) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      opacity: 1;
      transition: opacity 350ms ease-in, transform 200ms ease-in;
    }
  }
`

const LineTop = styled(Line)`
  transform: translateY(-200%);
  top: 0;

  @media ${REDUCED_MOTION.NO_PREFERENCE} and (hover: hover) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transform: translateY(0%);
    }
  }
`

const LineBottom = styled(Line)`
  transform: translateY(200%);
  bottom: 0;

  @media ${REDUCED_MOTION.NO_PREFERENCE} and (hover: hover) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transform: translateY(0%);
    }
  }
`


const ContentDefault = styled.span`
  display: inline-block;
  font-weight: ${WEIGHTS.medium};
  opacity: 1;
  transition: opacity 350ms;

  @media ${REDUCED_MOTION.NO_PREFERENCE} and (hover: hover) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transition: opacity 350ms;
      opacity: 0;
    }
  }
`

const ContentHover = styled.span`
  display: inline-block;
  font-weight: ${WEIGHTS.medium};
  opacity: 0;
  transition: opacity 350ms;
  position: absolute;
  left: 12px;
  top: 12px;
  color: currentColor;
  
  @media ${REDUCED_MOTION.NO_PREFERENCE} and (hover: hover) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transition: opacity 350ms;
      opacity: 1;
    }
  }
`


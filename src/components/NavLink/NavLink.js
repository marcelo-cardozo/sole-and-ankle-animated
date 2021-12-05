import styled from "styled-components/macro";
import {REDUCED_MOTION, WEIGHTS} from "../../constants";

export default function NavLink({children, ...rest}) {
  return (
    <Wrapper {...rest}>
      <ContentTop>{children}</ContentTop>
      <ContentBottom>{children}</ContentBottom>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  overflow: hidden;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const ContentTop = styled.span`
  display: inline-block;
  font-weight: ${WEIGHTS.medium};
  transition: opacity 500ms ease-in;
  
  ${Wrapper}:hover &, ${Wrapper}:focus & {
    opacity: 0;
    transition: opacity 500ms ease-out;
  }
  
  @media (hover: hover) and ${REDUCED_MOTION.NO_PREFERENCE} {
    transition: transform 300ms ease-in;

    ${Wrapper}:hover &, ${Wrapper}:focus & {
      opacity: revert;
      transform: translateY(-100%);
      transition: transform 200ms ease-out;
    }  
  }
`

const ContentBottom = styled.span`
  display: inline-block;
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  left: 0;
  opacity: 0;
  transition: opacity 500ms ease-in;
  
  ${Wrapper}:hover &, ${Wrapper}:focus & {
    opacity: 1;
    transition: opacity 500ms ease-out;
  }
  
  @media (hover: hover) and  ${REDUCED_MOTION.NO_PREFERENCE} {
    opacity: revert;
    top: 0;
    transform: translateY(100%);
    transition: transform 300ms ease-in;
    
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transform: translateY(0%);
      transition: transform 200ms ease-out;
    }
  }
`

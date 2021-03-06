import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Text = styled.p`
  margin: ${px2vw(4)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1.0rem;
  }
`;


export const Title = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.0rem;
  }
`;
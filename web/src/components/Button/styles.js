import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${px2vw(300)};
    min-height: ${px2vw(10)};
    padding: ${px2vw(20)};
    margin: ${px2vw(20)};
    height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(100)};
    min-height: ${px2vw(10)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(100)};
    min-height: ${px2vw(10)};
    height: 100%;
  }
`;

export const Title = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

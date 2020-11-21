import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
   display: flex;
    width: ${px2vw(1000)};
    min-height: ${px2vw(50)};
    flex-direction: column;
    padding: ${px2vw(20)};
    margin: ${px2vw(20)};
    background-color: ${props => props.bgColor};
    height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(100)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(150)};
    height: 100%;
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

export const Text = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
`;

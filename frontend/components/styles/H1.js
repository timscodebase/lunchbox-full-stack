import styled from "styled-components";

const H1 = styled.h1`
  font-size: 12rem;
  background: ${(props) => props.theme.lg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 0.6;
  padding-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    font-size: 6rem;
  }
`;

export default H1;

import styled from "styled-components";

const H3Title = styled.h3`
  font-size: 4rem;
  line-height: 0.6;
  padding-bottom: 1rem;
  display: inline-block;
  margin: 0;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    font-size: 6rem;
  }
`;

export default H3Title;

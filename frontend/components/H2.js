import styled from "styled-components";

const StyledH2Wrap = styled.div`
  background: ${(props) => props.theme.whiteTrans75};
  border-radius: 10px;
  padding: 1rem;
`;
const StyledH2 = styled.h2`
  margin: 0 auto;
  font-size: 12rem;
  background: ${(props) => props.theme.lg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 0.6;
  padding-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    font-size: 8rem;
  }
`;

const H2 = ({ children }) => (
  <StyledH2Wrap>
    <StyledH2>{children}</StyledH2>
  </StyledH2Wrap>
);

export default H2;

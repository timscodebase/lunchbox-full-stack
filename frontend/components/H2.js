import styled from "styled-components";

const StyledH2Wrap = styled.span`
  position: relative;
  background: ${(props) => props.theme.whiteTrans75};
  border-radius: 8px;
  padding: 0.75rem 0.75rem 0 0.75rem;
  display: inline-block;
  margin: -1rem auto -1rem auto;
  border-radius: ${(props) => props.theme.br};
  border: 1px solid ${(props) => props.theme.brightPink};
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
    font-size: 6rem;
  }
`;

const H2 = ({ children }) => (
  <StyledH2Wrap>
    <StyledH2>{children}</StyledH2>
  </StyledH2Wrap>
);

export default H2;

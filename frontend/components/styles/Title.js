import styled from "styled-components";

const Title = styled.h3`
  margin: -3rem 1rem 0 1rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    border: 2px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme.whiteTrans75};
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: ${(props) => props.theme.brightPink};
    padding: 0 1rem;
    border-radius: 5px;
  }
`;

export default Title;

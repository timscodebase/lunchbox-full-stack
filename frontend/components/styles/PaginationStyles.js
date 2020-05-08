import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${(props) => props.theme.purple};
  background: ${(props) => props.theme.whiteTrans75};
  border-radius: ${(props) => props.theme.br};
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${(props) => props.theme.purple};
    color: ${(props) => props.theme.purple};
    &:last-child {
      border-right: 0;
    }
  }
  a {
    color: ${(props) => props.theme.purple};
  }
  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;

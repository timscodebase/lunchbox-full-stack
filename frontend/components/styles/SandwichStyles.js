import styled from "styled-components";

const Item = styled.div`
  background: white;
  border: 1px solid ${(props) => props.theme.bightPink};
  box-shadow: ${(props) => props.theme.dropShadow};
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 40px 3rem 2rem 3rem;
    font-size: 1.5rem;
    margin: -22px 0 1px 0;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.brown};
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.brightPink};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    color: ${(props) => props.theme.brightPink};

    & > * {
      border: 0;
      font-size: 14px;
      padding: 1rem;
      background: white;
      color: ${(props) => props.theme.brightPink};
      &:hover {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.brightPink};
      }
    }
  }
`;

export default Item;

import styled from "styled-components";

const SingleSandwichStyles = styled.div`
  background: white;
  border: 1px solid ${(props) => props.theme.bightPink};
  box-shadow: ${(props) => props.theme.dropShadow};
  height: 450px;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
  }

  section {
    position: relative;
    border-right: 1px solid ${(props) => props.theme.purple};
    &:last-child {
      border-right: 0;
    }
  }
  h2 {
    margin-top: 1.5rem;
  }
  img {
    margin-top: -22px;
    height: calc(450px - 17px);
    width: 100%;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    text-align: center;
    padding: 0 4rem 4rem 4rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.brightPink};
  }
  .buttonList {
    position: absolute;
    bottom: 0;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    color: ${(props) => props.theme.brightPink};

    & > * {
      border: 0;
      font-size: 14px;
      padding: 1rem;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.brightPink};
      border-left: 1px solid ${(props) => props.theme.white};
      &:hover {
        color: ${(props) => props.theme.brightPink};
        background: ${(props) => props.theme.white};
      }
      &:last-child {
        border-right: 0;
      }
    }
  }
`;

export default SingleSandwichStyles;

import styled from "styled-components";

const StyledHomePage = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin: 0 0 -2rem 0;
  border-bottom: 4px solid ${(props) => props.theme.white};

  .hero {
    grid-column-start: 1;
    grid-column-end: 3;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.purple};
  }

  .side-bar {
    grid-column-start: 3;
    grid-row: 1 / span 4;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.pink};
  }
`;

const Home = () => (
  <StyledHomePage>
    <div className="hero">hi</div>
    <div className="featured"></div>
    <aside className="side-bar">hi</aside>
  </StyledHomePage>
);

export default Home;

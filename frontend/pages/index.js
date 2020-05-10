import styled from "styled-components";

const StyledHomePage = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 0 -2rem 0;
  border-bottom: 4px solid ${(props) => props.theme.white};
  text-align: center;

  h3 {
    margin: 0 auto;
  }

  .main {
    grid-column-start: 1;
    grid-column-end: 3;

    .hero,
    .featured,
    .story {
      padding: 1.5rem;
    }

    .hero {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.purple};
    }

    .featured {
      color: ${(props) => props.theme.brown};
      background: ${(props) => props.theme.white};
    }

    .story {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.brightPink};
    }
  }

  .side-bar {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.pink};
  }

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr;
    grid-gap: 0;

    .featured,
    .story,
    .side-bar {
      margin-top: 4px;
    }

    .side-bar {
      background: ${(props) => props.theme.brown};
    }
  }
`;

const Home = () => (
  <StyledHomePage>
    <section className="main">
      <div className="hero">hi</div>
      <div className="featured">
        <h3>Featured Sandwiches</h3>
      </div>
      <div className="story">
        <h3>Our Story</h3>
        <p>
          Fanny pack salvia farm-to-table, pour-over seitan hexagon flannel
          helvetica. Hella dreamcatcher lyft shoreditch cliche hot chicken marfa
          live-edge cray biodiesel hexagon. Selfies before they sold out fam
          portland craft beer succulents pabst marfa. Enamel pin poke subway
          tile direct trade venmo.
        </p>
      </div>
    </section>
    <aside className="side-bar">hi</aside>
  </StyledHomePage>
);

export default Home;

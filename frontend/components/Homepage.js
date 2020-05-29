import styled from "styled-components";

import FeaturedSandwiches from "./FeaturedSandwiches";
import Partners from "./Partners";

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

  h3.header {
    padding: 1rem;
    margin: 0 auto;
    font-weight: bold;
    border: 3px solid ${(props) => props.theme.brown};
    border-radius: ${(props) => props.theme.borderRadius};
    background: ${(props) => props.theme.whiteTrans75};
  }

  aside {
    padding: 1.5rem 1.5rem 0 0;
  }

  .main {
    grid-column-start: 1;
    grid-column-end: 3;

    @media (max-width: ${(props) => props.theme.tabletMQ}) {
      width: 100vw;
    }

    .hero,
    .featured,
    .story {
      padding: 1.5rem;
    }

    .hero {
      color: ${(props) => props.theme.brightPink};
    }

    .featured {
      color: ${(props) => props.theme.purple};
    }

    .story {
      color: ${(props) => props.theme.brown};
      margin-top: 1rem;
      padding: 0.5rem;
      background: ${(props) => props.theme.tan};
      border: 3px solid ${(props) => props.theme.brown};
      border-radius: ${(props) => props.theme.borderRadius};
    }
  }

  aside {
    color: ${(props) => props.theme.brightPink};
  }

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr;
    grid-gap: 0;

    .featured,
    .story,
    aside {
      margin-top: 4px;
    }

    aside {
      background: ${(props) => props.theme.brown};
    }
  }
`;

const FeaturedSandwichesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function Homepage() {
  return (
    <StyledHomePage>
      <section className="main">
        <div className="featured">
          <h3 className="header">Featured Sandwiches</h3>
          <FeaturedSandwiches />
        </div>
        <div className="story">
          <h3 className="header">Our Story</h3>
          <p>
            Fanny pack salvia farm-to-table, pour-over seitan hexagon flannel
            helvetica. Hella dreamcatcher lyft shoreditch cliche hot chicken
            marfa live-edge cray biodiesel hexagon. Selfies before they sold out
            fam portland craft beer succulents pabst marfa. Enamel pin poke
            subway tile direct trade venmo.
          </p>
        </div>
        <div className="hero">hi</div>
      </section>
      <aside>
        <h3 className="header">Ingredients/Partners</h3>
        <Partners />
      </aside>
    </StyledHomePage>
  );
}

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

  aside {
    padding: 1.5rem;
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
      color: ${(props) => props.theme.brightPink};
    }

    .featured {
      color: ${(props) => props.theme.purple};
    }

    .story {
      color: ${(props) => props.theme.brown};
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
          <h3>Featured Sandwiches</h3>
          <FeaturedSandwiches />
        </div>
        <div className="story">
          <h3>Our Story</h3>
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
        <h3>Ingredients/Partners</h3>
        <Partners />
      </aside>
    </StyledHomePage>
  );
}

import styled from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Error from "./ErrorMessage";
import FeaturedSandwich from "./FeaturedSandwich";

const FEATURED_SANDWICH_QUERY = gql`
  query FEATURED_SANDWICH_QUERY {
    sandwiches(orderBy: featured_DESC) {
      id
      image
      title
      description
    }
  }
`;

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

const FeaturedSandwichesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function Homepage() {
  <Query
    query={FEATURED_SANDWICH_QUERY}
    // fetchPolicy="network-only"
  >
    {({ data, error, loading }) => {
      if (loading) return <p>loading</p>;
      if (error) return <Error error={error.message} />;
      return (
        <StyledHomePage>
          <section className="main">
            <div className="hero">hi</div>
            <div className="featured">
              <h3>Featured Sandwiches</h3>
              <FeaturedSandwichesGrid>
                {data.sandwiches.map((sandwich) => (
                  <FeaturedSandwich key={sandwich.id} sandwich={sandwich} />
                ))}
              </FeaturedSandwichesGrid>
            </div>
            <div className="story">
              <h3>Our Story</h3>
              <p>
                Fanny pack salvia farm-to-table, pour-over seitan hexagon
                flannel helvetica. Hella dreamcatcher lyft shoreditch cliche hot
                chicken marfa live-edge cray biodiesel hexagon. Selfies before
                they sold out fam portland craft beer succulents pabst marfa.
                Enamel pin poke subway tile direct trade venmo.
              </p>
            </div>
          </section>
          <aside className="side-bar">hi</aside>
        </StyledHomePage>
      );
    }}
  </Query>;
}

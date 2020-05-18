import styled from "styled-components";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Error from "./ErrorMessage";
import FeaturedSandwich from "./FeaturedSandwich";

const FEATURED_SANDWICH_QUERY = gql`
  query FEATURED_SANDWICH_QUERY($true: Boolean!) {
    sandwiches(where: { featured: $true }) {
      id
      image
      title
      description
      price
    }
  }
`;

const FeaturedSandwichesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding-top: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export default function FeaturedSandwiches() {
  return (
    <Query
      query={FEATURED_SANDWICH_QUERY}
      // fetchPolicy="network-only"
      variables={{
        true: true,
      }}
    >
      {({ data, error, loading }) => {
        if (loading) return <p>loading</p>;
        if (error) return <Error error={error.message} />;
        return (
          <FeaturedSandwichesGrid>
            {data.sandwiches.map((sandwich) => (
              <FeaturedSandwich key={sandwich.id} sandwich={sandwich} />
            ))}
          </FeaturedSandwichesGrid>
        );
      }}
    </Query>
  );
}

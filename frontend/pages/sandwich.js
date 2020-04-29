import { useRouter, useState, useEffect } from "next/router";
import H2 from "../components/H2";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import formatMoney from "../lib/formatMoney";
import Sandwich from "../components/Sandwich";

const SINGLE_SANDWICH_QUERY = gql`
  query SINGLE_SANDWICH_QUERY($id: ID!) {
    sandwich(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`;

const SandwichWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  background: ${(props) => props.theme.whiteTrans75};
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.br};
  text-align: center;
`;

const SandwichPage = () => {
  const router = useRouter();
  return (
    <Query
      query={SINGLE_SANDWICH_QUERY}
      variables={{
        id: router.query.id,
      }}
    >
      {({ data, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (!data.sandwich)
          return <p>No Sandwich Found for ID {router.query.id}</p>;
        return (
          <>
            <H2>{data.sandwich.title}</H2>
            <SandwichWrapper>
              <Sandwich sandwich={data.sandwich} />
            </SandwichWrapper>
          </>
        );
      }}
    </Query>
  );
};

export default SandwichPage;

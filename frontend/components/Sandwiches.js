import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import Sandwich from "./Sandwich";
import Pagination from "./Pagination";
import { perPage } from "../config";

const ALL_SANDWICHES_QUERY = gql`
  query ALL_SANDWICHES_QUERY(
    $skip: Int = 0
    $first: Int = ${perPage}
  ) {
    sandwiches(
      skip: $skip
      first: $first
      orderBy: createdAt_DESC
    ) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const SandwichesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  background: ${(props) => props.theme.whiteTrans75};
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.br};

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr;
  }
`;

const Center = styled.div`
  text-align: center;
`;

export default function Sandwiches({ page }) {
  return (
    <Center>
      <Query
        query={ALL_SANDWICHES_QUERY}
        // fetchPolicy="network-only"
        variables={{
          skip: page * perPage - perPage,
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>loading</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <SandwichesList>
              {data.sandwiches.map((sandwich) => (
                <Sandwich key={sandwich.id} sandwich={sandwich} />
              ))}
            </SandwichesList>
          );
        }}
      </Query>
      <Pagination page={page} />
    </Center>
  );
}

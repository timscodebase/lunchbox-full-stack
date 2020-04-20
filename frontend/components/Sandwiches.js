import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import Sandwich from "./Sandwich";

const ALL_SANDWICHES_QUERY = gql`
  query ALL_SANDWICHES_QUERY {
    sandwiches {
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
  /* box-shadow: ${(props) => props.theme.bs}; */
  border-radius: ${(props) => props.theme.br};
`;

const Center = styled.div`
  text-align: center;
`;

class Sandwiches extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_SANDWICHES_QUERY}>
          {({ data, error, loading }) => {
            console.log(data);
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
      </Center>
    );
  }
}

export default Sandwiches;

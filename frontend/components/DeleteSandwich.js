import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import styled from "styled-components";

import ALL_SANDWICHES_QUERY from "./Sandwiches";

const DELETE_SANDWICH_MUTATION = gql`
  mutation DELETE_SANDWICH_MUTATION($id: ID!) {
    deleteSandwich(id: $id) {
      id
    }
  }
`;

const Button = styled.button`
  color: ${(props) => props.theme.brightPink};
  background: ${(props) => props.theme.brightPink};
`;

const DeleteSandwich = ({ id, children }) => {
  const update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_SANDWICHES_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted item out of the page
    data.items = data.items.filter(
      (item) => item.id !== payload.data.deleteItem.id
    );
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_SANDWICHES_QUERY, data });
  };
  return (
    <Mutation
      mutation={DELETE_SANDWICH_MUTATION}
      variables={{ id: id }}
      update={update}
    >
      {(deleteItem, { error }) => (
        <button
          onClick={() => {
            if (confirm("Are you sure you want to delete this sandwich?")) {
              deleteItem();
            }
          }}
        >
          {children}
        </button>
      )}
    </Mutation>
  );
};

export default DeleteSandwich;

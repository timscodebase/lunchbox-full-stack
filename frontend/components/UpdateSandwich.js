import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const SINGLE_SANDWICH_QUERY = gql`
  query SINGLE_SANDWICH_QUERY($id: ID!) {
    sandwich(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;
const UPDATE_SANDWICH_MUTATION = gql`
  mutation UPDATE_SANDWICH_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateSandwich(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

class UpdateSandwich extends Component {
  state = {};
  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateSandwich = async (e, updateSandwichMutation) => {
    e.preventDefault();
    console.log("Updating Sandwich!!");
    console.log(this.state);
    const res = await updateSandwichMutation({
      variables: {
        id: this.props.id,
        ...this.state,
      },
    });
    console.log("Updated!!");
  };

  render() {
    return (
      <Query
        query={SINGLE_SANDWICH_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.sandwich)
            return <p>No Sandwich Found for ID {this.props.id}</p>;
          return (
            <Mutation
              mutation={UPDATE_SANDWICH_MUTATION}
              variables={this.state}
            >
              {(updateSandwich, { loading, error }) => (
                <Form onSubmit={(e) => this.updateSandwich(e, updateSandwich)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                      Title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={data.sandwich.title}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="price">
                      Price
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        defaultValue={data.sandwich.price}
                        onChange={this.handleChange}
                      />
                    </label>

                    <label htmlFor="description">
                      Description
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter A Description"
                        required
                        defaultValue={data.sandwich.description}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">
                      Sav{loading ? "ing" : "e"} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateSandwich;
export { UPDATE_SANDWICH_MUTATION };

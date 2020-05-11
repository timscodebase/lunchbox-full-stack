import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";

import Form from "./styles/Form";
import Error from "./ErrorMessage";
import Input from "./Input";

const SINGLE_SANDWICH_QUERY = gql`
  query SINGLE_SANDWICH_QUERY($id: ID!) {
    sandwich(where: { id: $id }) {
      id
      title
      description
      price
      featured
      onSale
      outOfStock
    }
  }
`;
const UPDATE_SANDWICH_MUTATION = gql`
  mutation UPDATE_SANDWICH_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
    $featured: Boolean
    $onSale: Boolean
    $outOfStock: Boolean
  ) {
    updateSandwich(
      id: $id
      title: $title
      description: $description
      price: $price
      featured: $featured
      onSale: $onSale
      outOfStock: $outOfStock
    ) {
      id
      title
      description
      price
      featured
      onSale
      outOfStock
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
          console.log(data);
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
                    <section className="flags">
                      <label htmlFor="featured">Featured</label>
                      <Input
                        name="featured"
                        checked={data.sandwich.featured}
                        toggle={(e) =>
                          this.setState({
                            featured: e.target.value == "true" ? true : false,
                          })
                        }
                      />
                      <label htmlFor="onSale">On Sale</label>
                      <Input
                        name="onSale"
                        checked={data.sandwich.onSale}
                        toggle={(e) =>
                          this.setState({
                            onSale: e.target.value == "true" ? true : false,
                          })
                        }
                      />
                      <label htmlFor="outOfStock">Out Of Stock</label>
                      <Input
                        name="outOfStock"
                        checked={data.sandwich.outOfStock}
                        toggle={(e) =>
                          this.setState({
                            outOfStock: e.target.value == "true" ? true : false,
                          })
                        }
                      />
                    </section>
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

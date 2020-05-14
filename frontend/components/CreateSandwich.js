import React, { useState, useEffect } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

import Form from "./styles/Form";
import Error from "./ErrorMessage";

const CREATE_SANDWICH_MUTATION = gql`
  mutation CREATE_SANDWICH_MUTATION(
    $title: String!
    $price: Int!
    $description: String!
    $image: String
    $largeImage: String
    $featured: Boolean!
    $onSale: Boolean!
    $outOfStock: Boolean!
  ) {
    createSandwich(
      title: $title
      price: $price
      description: $description
      image: $image
      largeImage: $largeImage
      featured: $featured
      onSale: $onSale
      outOfStock: $outOfStock
    ) {
      id
    }
  }
`;

export default function CreateSandwich() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [largeImage, setLargeImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);

  async function uploadImage(e) {
    const images = e.target.files;
    const data = new FormData();
    data.append("file", images[0]);
    data.append("upload_preset", "lunchbox");

    const res = await fetch(
      " https://api.cloudinary.com/v1_1/the-classic-lunchbox/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const image = await res.json();

    setImage(image.secure_url);
    setLargeImage(image.eager[0].secure_url);
  }
  return (
    <Mutation
      mutation={CREATE_SANDWICH_MUTATION}
      variables={{
        title,
        price,
        description,
        image,
        largeImage,
        featured,
        onSale,
        outOfStock,
      }}
    >
      {(createSandwich, { loading, error }) => (
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await createSandwich();
            console.log(res);
            // Send them to single page
            Router.push({
              pathname: "/sandwich",
              query: { id: res.data.createSandwich.id },
            });
          }}
        >
          <Error error={error} />
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="image">
              Image
              <input
                type="file"
                id="image"
                name="image"
                placeholder="Upload an picture"
                onChange={uploadImage}
              />
              {image && <img src={image} alt="Upload Preview" />}
            </label>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            {/* Add regex for number on price */}
            <label htmlFor="price">
              Price
              <input
                type="number"
                id="price"
                name="price"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                required
              />
            </label>
            <label htmlFor="description">
              Description
              <textarea
                id="description"
                name="description"
                placeholder="Describe the sandwich :)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <section className="flags">
              <label htmlFor="featured">featured</label>
              <input
                type="checkbox"
                id="featured"
                name="featured"
                value="true"
                onChange={(e) =>
                  setFeatured(e.target.value === "true" ? true : false)
                }
              />
              <label htmlFor="onSale">On Sale</label>
              <input
                type="checkbox"
                id="onSale"
                name="onSale"
                value="true"
                onChange={(e) =>
                  setOnSale(e.target.value === "true" ? true : false)
                }
              />
              <label htmlFor="outOfStock">Out Of Stock</label>
              <input
                type="checkbox"
                id="outOfStock"
                name="outOfStock"
                value="true"
                onChange={(e) =>
                  setOutOfStock(e.target.value === "true" ? true : false)
                }
              />
            </section>
            <button type="submit">Submit</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  );
}

export { CREATE_SANDWICH_MUTATION };

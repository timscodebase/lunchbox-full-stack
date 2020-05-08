import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

import H2 from "../components/H2";
import DeleteSandwich from "./DeleteSandwich";
import formatMoney from "../lib/formatMoney";

import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import SingleSandwichStyles from "./styles/SingleSandwichStyles";

const Sandwich = ({ sandwich }) => {
  const router = useRouter();

  const { id, title, price, description, largeImage } = sandwich;
  return (
    <>
      <SingleSandwichStyles>
        <section>
          <Title>
            <Link
              href={{
                pathname: "/sandwich",
                query: { id },
              }}
            >
              {title}
            </Link>
          </Title>
          <PriceTag>{formatMoney(price)}</PriceTag>
          {largeImage && <img src={largeImage} alt={title} />}
          <div className="buttonList">
            <button onClick={() => router.push(`/update?id=${id}`)}>
              Edit
            </button>
            <button>Add To Cart</button>
            <DeleteSandwich id={id}>Delete Sandwich</DeleteSandwich>
          </div>
        </section>
        <section>
          <h2>Description</h2>
          <p>{description}</p>
        </section>
      </SingleSandwichStyles>
    </>
  );
};

export default Sandwich;
Sandwich.PropTypes = {
  sandwich: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  }),
};

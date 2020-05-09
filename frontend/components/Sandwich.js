import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

import DeleteSandwich from "./DeleteSandwich";
import formatMoney from "../lib/formatMoney";

import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import SandwichStyle from "./styles/SandwichStyles";

const Sandwich = ({ sandwich }) => {
  const router = useRouter();

  const { id, title, price, description, image, largeImage } = sandwich;
  return (
    <>
      <SandwichStyle>
        {image && <img src={image} alt={title} />}
        <Title>
          <Link
            href={{
              pathname: "/sandwich",
              query: { id },
            }}
          >
            <a>{title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>
        <div className="buttonList">
          <button onClick={() => router.push(`/update?id=${id}`)}>Edit</button>
          <button>Add To Cart</button>
          <DeleteSandwich id={id}>Delete Sandwich</DeleteSandwich>
        </div>
      </SandwichStyle>
    </>
  );
};

export default Sandwich;
Sandwich.propTypes = {
  sandwich: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
  }),
};

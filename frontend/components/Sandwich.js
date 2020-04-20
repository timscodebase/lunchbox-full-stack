import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Title from "./styles/Title";
import SandwichStyle from "./styles/SandwichStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

class Sandwich extends Component {
  static propTypes = {
    sandwich: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    }),
  };

  render() {
    const {
      id,
      title,
      price,
      description,
      image,
      largeImage,
    } = this.props.sandwich;
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
            <Link
              href={{
                pathname: "/update",
                query: { id },
              }}
            >
              <a>Edit</a>
            </Link>
            <button>Add To Cart</button>
            <button>Delete</button>
          </div>
        </SandwichStyle>
      </>
    );
  }
}

export default Sandwich;

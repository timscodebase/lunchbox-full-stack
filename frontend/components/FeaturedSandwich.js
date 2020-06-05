import Link from "next/link";
import styled from "styled-components";

import formatMoney from "../lib/formatMoney";

const StyledFeaturedSandwich = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  color: ${(props) => props.theme.brightPink};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.purple};
  overflow: hidden;
  position: relative;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .meta {
    background: ${(props) => props.theme.whiteTrans80};
    border-left: 1px solid ${(props) => props.theme.brightPink};
    padding: 1rem 2rem;
    text-align: left;

    h3 {
      color: ${(props) => props.theme.purple};
    }

    p {
      font-size: 2rem;
    }

    .price {
      position: absolute;
      bottom: -1rem;
      right: 2rem;
      font-size: 2.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.brown};
    }
  }

  @media (max-width: 1200px) {
    img {
      width: 300px;
      height: 240px;
      object-fit: cover;
    }
  }

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr;

    img {
      width: 100%;
    }
  }
`;

export default function FeaturedSandwich({ sandwich }) {
  const { id, title, price, description, image, largeImage } = sandwich;
  return (
    <Link
      href={{
        pathname: "/sandwich",
        query: { id },
      }}
    >
      <a>
        <StyledFeaturedSandwich>
          <img src={image} alt={title} />
          <div className="meta">
            <h3>{title}</h3>
            <p>{description}</p>
            <h4 className="price">{formatMoney(price)}</h4>
          </div>
        </StyledFeaturedSandwich>
      </a>
    </Link>
  );
}

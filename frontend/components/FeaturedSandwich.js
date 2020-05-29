import Link from "next/link";
import styled from "styled-components";

import formatMoney from "../lib/formatMoney";

const StyledFeaturedSandwich = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  color: ${(props) => props.theme.brown};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.purple};
  background: ${(props) => props.theme.whiteTrans75};
  overflow: hidden;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .meta {
    border-left: 1px solid ${(props) => props.theme.brightPink};
    padding-left: 2rem;
    text-align: left;

    p {
      font-size: 1.5rem;
      /* color: ${(props) => props.theme.white}; */
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
            <h4>{formatMoney(price)}</h4>
          </div>
        </StyledFeaturedSandwich>
      </a>
    </Link>
  );
}

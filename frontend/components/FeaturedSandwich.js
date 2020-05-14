import Link from "next/link";
import styled from "styled-components";

const StyledFeaturedSandwich = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${(props) => props.theme.brightPink};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.pink};
  overflow: hidden;

  img {
    width: 200px;
    height: 160px;
    object-fit: cover;
  }

  .meta {
    text-align: left;

    p {
      font-size: 1.5rem;
      color: ${(props) => props.theme.pink};
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
          </div>
        </StyledFeaturedSandwich>
      </a>
    </Link>
  );
}

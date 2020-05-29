import styled from "styled-components";

const StyledIngredient = styled.section`
  background: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.innerBorderRadius};
  border: 1px solid ${(props) => props.theme.brown};
  color: ${(props) => props.theme.brightPink};
  padding: 1rem;
  text-align: left;
  margin-bottom: 0.5rem;

  h3 {
    color: ${(props) => props.theme.purple};
  }

  a {
    display: inline-block;
    color: ${(props) => props.theme.brown};

    &:hover {
      text-decoration: underline;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default function ({ partner }) {
  const { companyName, description, website } = partner;
  return (
    <StyledIngredient>
      <h3>{companyName}</h3>
      <p>{description}</p>
      <a href={`//${website}`}>{`www.${website}`}</a>
    </StyledIngredient>
  );
}

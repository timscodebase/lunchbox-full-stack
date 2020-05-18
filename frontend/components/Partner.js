import styled from "styled-components";

const StyledIngredient = styled.section`
  background: ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.brown};
  color: ${(props) => props.theme.brown};
  padding: 0.5rem;
  text-align: left;
  margin-bottom: 1rem;

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

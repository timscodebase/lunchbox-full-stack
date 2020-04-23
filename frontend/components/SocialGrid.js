import styled from "styled-components";

const StyledSocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1rf 1fr;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SocialGrid = () => (
  <StyledSocialGrid>
    <div>f</div>
    <div>t</div>
    <div>p</div>
    <div>i</div>
  </StyledSocialGrid>
);

export default SocialGrid;

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const H3 = styled.h3`
  margin-top: 1rem !important;
  padding-bottom: 1rem !important;
  color: ${(props) => props.theme.brightPink} !important;
`;

const StyledSocialGrid = styled.div`
  height: calc(230px - 1rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  font-size: 5rem;

  a {
    display: block;
    color: ${(props) => props.theme.brightPink};

    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  a:hover,
  a:hover {
    div {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.brightPink};
    }
  }

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 3.5rem;
    height: 90px;

    a {
      height: 90px;
    }
  }
`;

const SocialGrid = ({ height }) => (
  <>
    <H3>We are social</H3>
    <StyledSocialGrid height={height}>
      <a href="//facebook.com/theclassiclunchbox" target="_blank">
        <div>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </a>
      <a href="//twitter.com/LunchboxClassic" target="_blank">
        <div>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </a>
      <a href="//pinterest.com/theclassiclunchbox/" target="_blank">
        <div>
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
      </a>
      <a href="//instagram.com/theclassiclunchbox/" target="_blank">
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
    </StyledSocialGrid>
  </>
);

export default SocialGrid;

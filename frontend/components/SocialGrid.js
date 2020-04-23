import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const StyledSocialGrid = styled.div`
  height: 155px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  a,
  .svg-inline--fa {
    display: block;
    height: 77.5px;
    color: ${(props) => props.theme.brightPink};

    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
    }
  }
`;

const SocialGrid = () => (
  <StyledSocialGrid>
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
);

export default SocialGrid;

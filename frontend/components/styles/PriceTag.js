import styled from "styled-components";

const PriceTag = styled.span`
  background: ${(props) => props.theme.brightPink};
  transform: rotate(12deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -12px;
  border-radius: 5px;
`;

export default PriceTag;

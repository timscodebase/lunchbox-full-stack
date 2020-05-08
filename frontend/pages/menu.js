import Sandwiches from "../components/Sandwiches";

import H2 from "../components/H2";
import { Query } from "react-apollo";

const Menu = ({ query }) => (
  <div>
    <H2>Menu</H2>
    <Sandwiches page={parseFloat(query.page)} />
  </div>
);

export default Menu;

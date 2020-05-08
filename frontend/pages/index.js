import Sandwiches from "../components/Sandwiches";

import H2 from "../components/H2";

const Home = ({ query }) => (
  <div>
    <H2>Menu</H2>
    <Sandwiches page={parseFloat(query.page) || 1} />
  </div>
);

export default Home;

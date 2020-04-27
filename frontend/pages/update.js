import UpdateSandwich from "../components/UpdateSandwich";

import H2 from "../components/H2";

const Update = ({ query }) => {
  return (
    <div>
      {/* <H2>Update a new Sandwich</H2> */}
      <UpdateSandwich id={query.id} />
    </div>
  );
};

export default Update;

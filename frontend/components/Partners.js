import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import Error from "./ErrorMessage";
import Partner from "./Partner";

const ALL_PARTNERS_QUERY = gql`
  query ALL_PARTNERS_QUERY {
    partners {
      id
      address
      companyName
      contactName
      description
      email
      website
    }
  }
`;

const StyledPartners = styled.div`
  background: ${(props) => props.theme.tan};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 3px solid ${(props) => props.theme.brown};
`;

export default function Partners() {
  return (
    <Query query={ALL_PARTNERS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>loading...</p>;
        if (error) return <Error error={error.message} />;
        return (
          <StyledPartners>
            {data.partners.map((partner) => (
              <Partner key={partner.id} partner={partner} />
            ))}
          </StyledPartners>
        );
      }}
    </Query>
  );
}

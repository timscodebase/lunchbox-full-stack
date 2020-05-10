import { useRouter } from "next/router";
import Head from "next/head";
import gql from "graphql-tag";
import styled from "styled-components";
import { Query } from "react-apollo";

import Error from "../components/ErrorMessage";
import SingleSandwich from "../components/SingleSandwich";

const SINGLE_SANDWICH_QUERY = gql`
  query SINGLE_SANDWICH_QUERY($id: ID!) {
    sandwich(where: { id: $id }) {
      id
      title
      description
      price
      image
      largeImage
    }
  }
`;

const SandwichWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  background: ${(props) => props.theme.whiteTrans75};
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.br};
  text-align: center;
`;

const SandwichPage = ({ query }) => {
  return (
    <Query
      query={SINGLE_SANDWICH_QUERY}
      variables={{
        id: query.id,
      }}
    >
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <Error error={error} />;
        if (!data.sandwich) return <p>No Sandwich Found for ID {query.id}</p>;
        return (
          <>
            <Head>
              <meta charset="utf-8" />
              <meta name="description" content={data.sandwich.description} />
              <meta name="image" content={data.sandwich.image} />
              <meta itemprop="name" content={data.sandwich.title} />
              <meta
                itemprop="description"
                content={data.sandwich.description}
              />
              <meta itemprop="image" content={data.sandwich.image} />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:title" content={data.sandwich.title} />
              <meta
                name="twitter:description"
                content={data.sandwich.description}
              />
              <meta name="twitter:site" content="@LunchboxClassic" />
              <meta name="twitter:creator" content="@webruin" />
              <meta name="twitter:image:src" content={data.sandwich.image} />
              <meta name="og:title" content={data.sandwich.title} />
              <meta name="og:description" content={data.sandwich.description} />
              <meta name="og:image" content={data.sandwich.image} />
              <meta name="og:url" content={window.location} />
              <meta name="og:site_name" content={data.sandwich.title} />
              <meta name="fb:admins" content="2548285428824960" />
              <meta name="og:type" content="article" />
              <meta name="article:section" content="Food" />
              <meta name="article:author" content="Tim Smith" />
              <meta name="article:tag" content="Food" />
            </Head>
            <SingleSandwich sandwich={data.sandwich} />
          </>
        );
      }}
    </Query>
  );
};

export default SandwichPage;

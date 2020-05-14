import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";

import Error from "./ErrorMessage";
import PaginationStyles from "./styles/PaginationStyles";
import { perPage } from "../config";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    sandwichesConnection {
      aggregate {
        count
      }
    }
  }
`;

export default function Pagination({ page }) {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ error, data, loading }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        const count = data.sandwichesConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        return (
          <PaginationStyles>
            <Head>
              <title>{`The Classic Lunchbox | Menu Page ${pages}`}</title>
            </Head>
            <Link
              prefetch
              href={{
                pathname: "sandwiches",
                query: { page: page - 1 },
              }}
            >
              <a aria-disabled={page <= 1}>&#60;</a>
            </Link>
            <p>
              Page {page || 1} of {pages}
            </p>
            <Link
              prefetch
              href={{
                pathname: "sandwiches",
                query: { page: page + 1 },
              }}
            >
              <a aria-disabled={page >= pages}>&#62;</a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
}

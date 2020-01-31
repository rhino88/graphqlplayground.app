import * as React from "react";
import { render } from "react-dom";
import GraphiQL from "graphiql";

import "./index.css";

const URL = "https://swapi-graphql.netlify.com/.netlify/functions/index";

function graphQLFetcher(graphQLParams: any) {
  return fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}

const container = document.getElementById("graphiql");

const defaultQuery = `
{
  allFilms {
    edges {
      node {
        id
        title
        producers
        episodeID
        created
      }
    }
  }
}
`;

render(
  <GraphiQL fetcher={graphQLFetcher} defaultQuery={defaultQuery} />,
  container
);

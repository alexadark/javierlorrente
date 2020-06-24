/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import React from "react";
import { connect } from "frontity";
import Archive from "../archive/archive";
import { getUrlData } from "../../helpers";
import SearchForm from "./searchForm";

const reverseFormat = (query) => query.replace("+", " ");

const SearchResults = ({ state }) => {
  // Get information about the current URL.
  const data = getUrlData(state);
  console.log("data", data);
  const { total, searchQuery } = data;
  // data.total → total pages that match the current path/url
  // data.searchQuery → query done to get search results
  const isEmpty = data.total === 0;
  return (
    <>
      <header label="search">
        <Container
          className="introText"
          sx={{
            textAlign: "center",
            p: {
              fontSize: "l",
            },
            mb: 50,
          }}
        >
          <h1
            sx={{
              fontSize: "xl",
              // fontFamily: "body",
              textTransform: "uppercase",
              span: { color: "accent" },
            }}
          >
            Resultados para : <span>{`“${reverseFormat(searchQuery)}”`}</span>
          </h1>
          {isEmpty ? (
            <p>No pudimos encontrar ningún resultado para su búsqueda.</p>
          ) : (
            <p>
              hemos encontrado {total}{" "}
              {total === 1 ? "resultado" : "resultados"} para su búsqueda.
            </p>
          )}
        </Container>
      </header>
      {isEmpty ? (
        <Container>
          <SearchForm />
        </Container>
      ) : (
        <Archive showMedia={false} />
      )}
    </>
  );
};

export default connect(SearchResults);

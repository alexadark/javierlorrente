/** @jsx jsx */
import { jsx, Avatar, Flex, Container } from "theme-ui";
import React, { useEffect } from "react";
import { connect } from "frontity";

import ArchiveItem from "./archiveItem";
import Pagination from "./pagination";
import { getUrlData } from "../../helpers";
import { h4 } from "../../theme-ui/components/typo";

const Archive = ({ state, showMedia }) => {
  const data = getUrlData(state);
  const author = state.source.author[data.id];
  const allCats = state.source.get("all-categories").items;
  const currentCat = allCats.filter((cat) => cat.link.includes(data.link));
  const {
    description,
    acf: { menuName },
  } = currentCat[0];

  console.log(
    "allCats",
    allCats,
    "data",
    data,
    "currentCat",
    currentCat,
    "description",
    description,
    "menuName",
    menuName
  );

  const items = data.items;

  return (
    <>
      {data.isTaxonomy && (
        <h3
          className="archiveTitle"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            mb: 30,
          }}
        >
          {state.source[data.taxonomy][data.id].name}
        </h3>
      )}

      {data.taxonomy === "category" && (
        <Container sx={{ maxWidth: "l", my: 40 }}>
          <p sx={{ textAlign: "center" }}>{description}</p>
        </Container>
      )}

      {data.isAuthor && (
        <Flex sx={{ justifyContent: "center", mb: 30 }}>
          <Avatar
            src={author.avatar_urls[48]}
            sx={{ width: 50, height: 50, mr: 25 }}
          />
          <h3
            className="archiveTitle"
            sx={{ textTransform: "uppercase", letterSpacing: 1.2 }}
          >
            {" "}
            {author.name}
          </h3>
        </Flex>
      )}

      {items.map(({ id, type }) => {
        const item = state.source[type][id];
        return (
          <ArchiveItem
            key={item.id}
            item={item}
            type={data.type}
            showMedia={showMedia}
          />
        );
      })}
      {/* <Pagination /> */}
    </>
  );
};

export default connect(Archive);

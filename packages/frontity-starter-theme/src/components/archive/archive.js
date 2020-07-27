/** @jsx jsx */
import { jsx, Avatar, Flex, Container } from "theme-ui";
import React, { useEffect } from "react";
import { connect } from "frontity";

import ArchiveItem from "./archiveItem";
import { getUrlData } from "../../helpers";
import Link from "../link";

const Archive = ({ state, showMedia }) => {
  const data = getUrlData(state);
  const author = state.source.author[data.id];
  const allCats = state.source.get("all-categories").items;
  const currentCat = allCats.filter((cat) => cat.link.includes(data.link));
  const { description } = currentCat[0];

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
      {!data.isHome && (
        <Container sx={{ maxWidth: "l", my: 40 }}>
          <p sx={{ textAlign: "center" }}>{description}</p>
          {currentCat[0].acf.taxMenu && (
            <Flex
              as="nav"
              className="taxMenu"
              sx={{
                justifyContent: "center",
                mt: 50,
                bg: "cardBg",
                py: 20,
                boxShadow: "small",
                a: { textTransform: "uppercase", fontSize: "xs", px: 15 },
              }}
            >
              {currentCat[0].acf.taxMenu.map((item, i) => {
                const { url, title } = item.menu_item;

                return (
                  <>
                    {url && title && (
                      <Link key={i} link={url}>
                        {title}
                      </Link>
                    )}
                  </>
                );
              })}
            </Flex>
          )}
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

/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import React from "react";
import { connect } from "frontity";

const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  console.log("data", data);

  const Html2React = libraries.html2react.Component;

  return (
    <>
      <Container>
        {data?.items?.map(({ id }) => {
          return (
            <>
              <div className="comment" sx={{ ...style }}>
                <div className="comment-author">
                  {state.source.comment[id].author_name || "Anonymous"}:
                </div>
                <div>
                  <Html2React
                    html={state.source.comment[id].content.rendered}
                  />
                </div>
              </div>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default connect(CommentsList);

const style = {
  position: "relative",
  py: ["xxs", "s"],
  px: ["xs", "m"],
  zIndex: 0,
  my: 20,
  boxShadow: "small",
  color: "text",
  bg: "inputBg",
  borderRadius: 5,

  ".comment-author": {
    //fontFamily: 'heading',
    color: "inherit",
    textDecoration: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

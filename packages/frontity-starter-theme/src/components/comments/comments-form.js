/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { connect } from "frontity";
import Loading from "../loading";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
    <>
      <h2 sx={{ pt: 50 }}>Comentarios</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.comments.submit(postId);
        }}
        sx={{ ...formStyles }}
      >
        {/* If the form is submitting, we can show some kind of a loading state */}
        {form?.isSubmitting && <Loading />}

        <label>
          <input
            type="text"
            name="author_name"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorName: e.target.value,
              })
            }
            value={state.comments.forms[postId]?.fields?.authorName || ""}
            placeholder="Nombre"
          />
          {form?.errors?.authorName}
        </label>

        <label>
          <input
            type="email"
            name="author_email"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorEmail: e.target.value,
              })
            }
            value={state.comments.forms[postId]?.fields?.authorEmail || ""}
            placeholder="Email"
          />
          {form?.errors?.authorEmail}
        </label>

        <label>
          <textarea
            name="content"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                content: e.target.value,
              })
            }
            value={state.comments.forms[postId]?.fields?.content || ""}
            placeholder="Mensage"
          />
          {/* Show the errors for the individual fields.
            E.g. content of a comment cannot be empty and the email must be valid */}
          {form?.errors?.content}
        </label>

        {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
        {form?.errorMessage && <div>ERROR: {form?.errorMessage}</div>}

        {/* If the form was submitted successfully we can show a confirmation */}
        <div>
          {form?.isSubmitted && "The comment was submitted successfully!"}
        </div>

        <input
          type="submit"
          value="Enviar"
          sx={{ textTransform: "uppercase", fontWeight: 600 }}
        />
      </form>
    </>
  );
};

export default connect(CommentsForm);

const formStyles = {
  // display: "flex",

  label: {
    display: "block",
  },
};

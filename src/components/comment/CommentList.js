import React from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Paper, Divider } from "@material-ui/core";
import CommentItem from "./CommentItem";

export default function AlignItemsList() {
  const comments = useSelector((state) => state.comment.items);

  const CommentComponent = (comment) => {
    return (
      <Paper key={comment.id}>
        <Grid container justify="flex-end">
          <Grid item xs={12}>
            <CommentItem comment={comment} />
            <Box p={{ xs: 1, sm: 2 }}>
              <Divider />
            </Box>
          </Grid>

          {comment.replies.map((reply) => {
            return (
              <Grid item xs={11} key={reply.id}>
                <CommentItem comment={reply} />
                <Box p={{ xs: 1, sm: 2 }}>
                  <Divider />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  };

  const mainComponentBuilder = () => {
    if (comments.length === 0) {
      return (
        <Grid container justify="center" alignItems="center">
          Loading ...
        </Grid>
      );
    } else {
      return comments.map((comment) => CommentComponent(comment));
    }
  };

  return (
    <Box style={{ height: "500px", overflowY: "auto" }}>
      {mainComponentBuilder()}
    </Box>
  );
}

import React from "react";
import { Grid, Avatar, Box, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function CommentItem({ comment }) {
  const matches = useMediaQuery("(min-width:640px)");
  return (
    <Box>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={2} sm={1} md={1}>
          <Grid container justify="flex-end" alignItems="baseline">
            <Box mr={{ xs: 1, sm: 2, md: 2 }} mt={{ xs: 0, sm: 1, md: 1 }}>
              <Avatar
                style={{
                  height: matches ? "2.4em" : "2.2em",
                  width: matches ? "2.4em" : "2.2em",
                }}
                variant="rounded"
                src={comment.picture}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={11} md={11}>
          <Typography variant="h6">{comment.name}</Typography>
          <Typography variant="overline">{comment.timestamp}</Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={10} sm={11} md={11}>
          <Typography variant="body1">{comment.content}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CommentItem;

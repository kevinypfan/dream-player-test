import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
  Grid,
  Button,
  TextField,
  Avatar,
  Box,
  Hidden,
  Paper,
  Container,
  Typography,
  Divider,
} from "@material-ui/core";
import CommentItem from "./CommentItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const comments = useSelector((state) => state.comment.items);

  const CommentComponent = (comment) => {
    return (
      <Paper key={comment.id}>
        <Grid container justify="flex-end">
          <Grid item xs={12}>
            <CommentItem comment={comment} />
            <Divider />
          </Grid>

          {comment.replies.map((reply) => {
            return (
              <Grid item xs={11} key={reply.id}>
                <Box>
                  <CommentItem comment={reply} />
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

  return <Grid container>{mainComponentBuilder()}</Grid>;
}

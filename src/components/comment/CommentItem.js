import React from "react";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  smallPadding: {
    padding: "8px",
  },
  largePadding: {
    padding: "16px",
  },
}));

function CommentItem({ comment }) {
  const classes = useStyles();
  return (
    <Container className={classes.largePadding}>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={1}>
          <Grid container justify="flex-end">
            <Avatar
              style={{ height: "2.5em", width: "2.5em" }}
              variant="rounded"
              style={{ margin: "8px 16px" }}
              src={comment.picture}
            />
            {/* <Avatar
              variant="rounded"
              className={classes.large}
              style={{ padding: "8px 16px" }}
            /> */}
          </Grid>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="subtitle1" component="h3">
            {comment.name}
          </Typography>
          <Typography variant="body2" component="h3">
            {comment.timestamp}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={11}>
          <Typography variant="body1" component="h3">
            {comment.content}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CommentItem;

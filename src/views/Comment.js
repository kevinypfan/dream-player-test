import { Container, Divider } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import {
  Grid,
  Button,
  TextField,
  Avatar,
  Box,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import CommentList from "../components/comment/CommentList";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";

const Section = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  margin-top: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 16px;
  display: block;
  padding: 1em 2em;
`;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  smallPadding: {
    padding: "8px",
  },
  largePadding: {
    padding: "16px",
  },
}));

function Comment() {
  const comments = useSelector((state) => state.comment.items);
  const dispatch = useDispatch();
  const loadComments = useCallback(() => dispatch(actions.loadComments()), [
    dispatch,
  ]);
  console.log(comments);

  useEffect(() => {
    if (comments.length === 0) {
      loadComments();
    }
  }, [loadComments, comments]);
  return (
    <Container>
      <Box>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body2" component="h3">
              5 則留言
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" component="h3">
              Powered by KevinFan
            </Typography>
          </Grid>
        </Grid>

        <Divider style={{ margin: "0.8em 0" }}></Divider>
        <Grid container>
          <Grid
            item
            xs={1}
            style={{
              display: "flex",
              marginTop: "8px",
              justifyContent: "center",
            }}
          >
            <Avatar
              style={{ height: "2.5em", width: "2.5em" }}
              variant="rounded"
              src={
                "https://profile.line-scdn.net/0h-tvHALWncltLMV6Ox9gNDHd0fDY8H3QTMwVuOmsxfGtjCDFYJFU0NGo4fDxnADIMcwA0bT41f20ys"
              }
            />
          </Grid>

          <Grid item xs={11}>
            <TextField
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={3}
              defaultValue="Default Value"
              variant="outlined"
            />
            <Grid
              container
              justify="space-between"
              alignItems="center"
              style={{ marginTop: "0.8em" }}
            >
              <Grid item>
                <Typography variant="body2" component="h3">
                  使用者名稱 - kevinypfan
                </Typography>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Primary
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ margin: "0.8em 0" }}></Divider>
        <Grid container>
          <Grid item xs={12} style={{ overflowY: "auto" }}>
            <Paper>
              <CommentList />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Comment;

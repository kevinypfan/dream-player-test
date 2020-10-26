import { Container, Divider } from "@material-ui/core";
import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Grid,
  Button,
  TextField,
  Avatar,
  Box,
  Typography,
} from "@material-ui/core";
import CommentList from "../components/comment/CommentList";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

// moment.format("YYYY-MM-DD");

function Comment() {
  const matches = useMediaQuery("(min-width:640px)");
  const [user, setUser] = useState({
    name: "kevinypfan",
    picture:
      "https://profile.line-scdn.net/0h-tvHALWncltLMV6Ox9gNDHd0fDY8H3QTMwVuOmsxfGtjCDFYJFU0NGo4fDxnADIMcwA0bT41f20ys",
  });
  const inputContentRef = useRef(null);

  const comments = useSelector((state) => state.comment.items);
  const dispatch = useDispatch();
  const loadComments = useCallback(() => dispatch(actions.loadComments()), [
    dispatch,
  ]);

  const sendComment = () => {
    dispatch(
      actions.addComment({
        id: uuidv4(),
        ...user,
        content: inputContentRef.current.value,
        timestamp: moment().format("YYYY-MM-DD"),
        replies: [],
      })
    );
  };

  useEffect(() => {
    if (comments.length === 0) {
      loadComments();
    }
  }, [loadComments, comments]);
  return (
    <Container>
      <Box p={{ xs: 1, sm: 1, sm: 2 }} bgcolor="white">
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body2" component="h3">
              {comments.length} 則留言
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
            xs={2}
            sm={1}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              variant="rounded"
              src={user.picture}
              style={{
                height: matches ? "2.4em" : "2.2em",
                width: matches ? "2.4em" : "2.2em",
              }}
            />
          </Grid>

          <Grid item sm={11} xs={10}>
            <TextField
              id="outlined-multiline-static"
              multiline
              fullWidth
              rows={3}
              variant="outlined"
              placeholder="留下你的留言"
              inputRef={inputContentRef}
            />
            <Grid
              container
              justify="space-between"
              alignItems="center"
              style={{ marginTop: "0.8em" }}
            >
              <Grid item>
                <Typography variant="body2" component="h3">
                  使用者名稱 - {user.name}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={sendComment}
                >
                  發送留言
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ margin: "0.8em 0" }}></Divider>
        <Grid container>
          <Grid item xs={12}>
            <CommentList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Comment;

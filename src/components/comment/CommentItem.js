import React, { useRef, useState } from "react";
import {
  Grid,
  Avatar,
  Box,
  Typography,
  IconButton,
  TextField,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReplyIcon from "@material-ui/icons/Reply";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import SendIcon from "@material-ui/icons/Send";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

function CommentItem({ comment, type }) {
  const { selectedReplyId, selectedDeleteId } = useSelector(
    (state) => state.comment
  );
  const [user, setUser] = useState({
    name: "kevinypfan",
    picture:
      "https://profile.line-scdn.net/0h-tvHALWncltLMV6Ox9gNDHd0fDY8H3QTMwVuOmsxfGtjCDFYJFU0NGo4fDxnADIMcwA0bT41f20ys",
  });
  console.log({ selectedReplyId, selectedDeleteId });
  const dispatch = useDispatch();
  const inputReplyRef = useRef(null);
  const onClickDeleteBtn = (commentId) => () => {
    dispatch(actions.setSelectedDeleteId(commentId));
  };
  const onClickReplyBtn = (commentId) => () => {
    dispatch(actions.setSelectedReplyId(commentId));
  };
  const onClickReplySubmit = (event) => {
    dispatch(
      actions.replyComment(selectedReplyId, {
        id: uuidv4(),
        ...user,
        content: inputReplyRef.current.value,
        timestamp: moment().format("YYYY-MM-DD"),
      })
    );
    inputReplyRef.current.value = "";
  };
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
        <Grid item xs={10} sm={11} md={11} style={{ position: "relative" }}>
          {type === "comment" && (
            <Box style={{ position: "absolute", right: 0 }}>
              <IconButton onClick={onClickReplyBtn(comment.id)}>
                <ReplyIcon />
              </IconButton>
              <IconButton onClick={onClickDeleteBtn(comment.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          <Typography variant="h6">{comment.name}</Typography>
          <Typography variant="overline">{comment.timestamp}</Typography>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={10} sm={11} md={11}>
          <Typography variant="body1">{comment.content}</Typography>
        </Grid>
      </Grid>
      {selectedReplyId === comment.id && (
        <Box mt={1}>
          <Grid container justify="flex-end">
            <Grid item xs={10} sm={10} md={10}>
              <TextField
                id="outlined-multiline-static"
                multiline
                fullWidth
                variant="outlined"
                placeholder="回覆留言"
                inputRef={inputReplyRef}
              />
            </Grid>
            <Grid item xs={1} sm={1} md={1}>
              <IconButton onClick={onClickReplySubmit}>
                <SendIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default CommentItem;

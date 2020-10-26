import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Box,
  Paper,
  Divider,
  Typography,
  Modal,
  Button,
} from "@material-ui/core";
import CommentItem from "./CommentItem";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../../store/actions/index";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function CommentList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.items);
  const selectedDeleteId = useSelector(
    (state) => state.comment.selectedDeleteId
  );

  const deleteCommentHandler = (confirm) => () => {
    if (confirm) {
      dispatch(actions.deleteComment(selectedDeleteId));
      dispatch(actions.setSelectedDeleteId(null));
    } else {
      dispatch(actions.setSelectedDeleteId(null));
    }
  };

  const CommentComponent = (comment) => {
    return (
      <Paper key={comment.id}>
        <Grid container justify="flex-end">
          <Grid item xs={12}>
            <CommentItem comment={comment} type="comment" />
            <Box p={{ xs: 1, sm: 2 }}>
              <Divider />
            </Box>
          </Grid>

          {comment.replies.map((reply) => {
            return (
              <Grid item xs={11} key={reply.id}>
                <CommentItem comment={reply} type="reply" />
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
          <Typography variant="h6">目前沒有訊息</Typography>
        </Grid>
      );
    } else {
      return comments.map((comment) => CommentComponent(comment));
    }
  };

  const deleteConfirmDialog = (commentId) => {
    return (
      <Modal open={!!selectedDeleteId}>
        <div className={classes.paper}>
          <h2 id="simple-modal-title">刪除確認</h2>
          <p id="simple-modal-description">
            請問您確定要刪除 ID: {commentId} 留言嗎？
          </p>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                onClick={deleteCommentHandler(true)}
              >
                刪除
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={deleteCommentHandler(false)}
              >
                取消
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    );
  };

  return (
    <Box style={{ height: "500px", overflowY: "auto" }}>
      {mainComponentBuilder()}
      {deleteConfirmDialog(selectedDeleteId)}
    </Box>
  );
}

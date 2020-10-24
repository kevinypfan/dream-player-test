import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container, Hidden, Paper } from "@material-ui/core";
import MessageList from "../components/message/MessageList";
import MessageItem from "../components/message/MessageItem";
import * as actions from "../store/actions/index";

function Message() {
  const { items: messages } = useSelector((state) => state.message);
  console.log(messages);

  const dispatch = useDispatch();
  const loadMessages = useCallback(() => dispatch(actions.loadMessages()), [
    dispatch,
  ]);

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  return (
    <Container maxWidth="md" disableGutters>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper style={{ maxHeight: "100vh", overflow: "auto" }}>
            {messages.length > 0 && <MessageList messages={messages} />}
          </Paper>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={6}>
            <MessageItem />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}

export default Message;

import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container, Paper } from "@material-ui/core";
import MessageList from "../components/message/MessageList";
import MessageDetail from "../components/message/MessageDetail";
import * as actions from "../store/actions/index";
import { useRouteMatch, Switch, Route, useHistory } from "react-router-dom";

function MessageMenu() {
  const { items: messages, selectedId } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  let { path } = useRouteMatch();
  const loadMessages = useCallback(() => dispatch(actions.loadMessages()), [
    dispatch,
  ]);
  const history = useHistory();

  useEffect(() => {
    if (messages.length === 0) {
      loadMessages();
      history.push("/message");
    }
  }, [loadMessages, messages, history]);

  return (
    <Container maxWidth="md" disableGutters>
      <Grid container>
        <Switch>
          <Route exact path={path}>
            <Grid item xs={12} sm={6}>
              <Paper style={{ maxHeight: "100vh", overflow: "auto" }}>
                {messages.length > 0 && <MessageList messages={messages} />}
              </Paper>
            </Grid>
          </Route>
          <Route path={`${path}/:id`}>
            <Grid item xs={12} sm={6}>
              <Paper style={{ maxHeight: "100vh", overflow: "auto" }}>
                {messages.length > 0 && <MessageList messages={messages} />}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              {selectedId && <MessageDetail />}
            </Grid>
          </Route>
        </Switch>
      </Grid>
    </Container>
  );
}

export default MessageMenu;

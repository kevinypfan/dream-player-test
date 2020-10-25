import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { useHistory, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MessageList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  let { path, url } = useRouteMatch();
  console.log({ path, url });
  return (
    <Hidden xsDown={url !== "/message"}>
      <List className={classes.root}>
        {props.messages.map(
          ({ id, title, description, article, timestamp }) => (
            <ListItem
              key={title}
              button
              onClick={() => {
                dispatch(actions.selectedMessage(id));
                history.push(`/message/${id}`);
              }}
            >
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary">
                    {timestamp}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          )
        )}
      </List>
    </Hidden>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function MessageList(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <List className={classes.root}>
      {props.messages.map(({ title, description, article, timestamp }) => (
        <ListItem key={title}>
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
      ))}
    </List>
  );
}

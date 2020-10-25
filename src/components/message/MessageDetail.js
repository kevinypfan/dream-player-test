import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Hidden from "@material-ui/core/Hidden";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MessageDetail() {
  const classes = useStyles();
  const { items: messages } = useSelector((state) => state.message);
  let { id } = useParams();
  let history = useHistory();
  let { path, url } = useRouteMatch();
  const matches = useMediaQuery("(min-width:600px)");
  console.log(matches);

  const message = messages.find((el) => el.id === id);
  return (
    <Hidden xsDown={url === "/message"}>
      <Card className={classes.root} variant="outlined">
        <CardActions>
          {!matches && (
            <Button onClick={() => history.push("/message")}>返回上一頁</Button>
          )}
        </CardActions>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.title}
          </Typography>

          <Typography variant="body2" component="p">
            {message.article}
          </Typography>
        </CardContent>
      </Card>
    </Hidden>
  );
}

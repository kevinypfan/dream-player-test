import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Comment from "./views/Comment";
import Message from "./views/Message";
import UploadImage from "./views/UploadImage";
import Home from "./views/Home";

export default function App() {
  return (
    <Router>
      <AppBar />
      <Drawer />
      <Switch>
        <Route path="/comment">
          <Comment />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/upload-image">
          <UploadImage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

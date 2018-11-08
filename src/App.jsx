import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Loadable from "react-loadable";

import Loading from "./components/Loading";

const LoadableHome = Loadable({
  loader: () => import("./pages/Home"),
  loading: Loading
});
const LoadableAbout = Loadable({
  loader: () => import("./pages/About"),
  loading: Loading
});
const LoadableContact = Loadable({
  loader: () => import("./pages/Contact"),
  loading: Loading
});
const LoadableNotFound = Loadable({
  loader: () => import("./pages/NotFound"),
  loading: Loading
});

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');

  html, body {
    min-height: 100vh;
    width: 100%;
  }

  body {
    font-family: 'Inconsolata', monospace;
    font-size: 18px;
    margin: 0;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inconsolata', monospace;
  }
`;

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" render={() => <LoadableHome />} />
            <Route path="/about" render={() => <LoadableAbout />} />
            <Route path="/contact" render={() => <LoadableContact />} />
            <Route render={() => <LoadableNotFound />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

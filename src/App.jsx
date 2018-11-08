import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/contact" render={() => <Contact />} />
            <Route render={() => <NotFound />} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

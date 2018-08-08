import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal} from "styled-components"
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

injectGlobal`
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

  h1, h2, h3, h4. h5, h6 {
    font-family: 'Inconsolata', monospace;
  }
`
// Un-comment parent Layout and remove Layout from Route render prop if you don't want animations.
class App extends Component {
  render() {
    return (
      <Router>
        {/* <Layout>  */}
          <Switch>
            <Route exact path="/" render={() => <Layout key="/" title="CRA Stater"><Home/></Layout>} />
            <Route path="/about" render={() => <Layout key="/about" title="About | CRA Stater"><About/></Layout>} />
            <Route path="/contact" render={() => <Layout key="/contact" title="Contact | CRA Stater"><Contact/></Layout>} />
            <Route render={() => <Layout key="/notfound" title="Page not found"><NotFound/></Layout>} />
          </Switch>
        {/* </Layout> */}
      </Router>
    );
  }
}

export default App;

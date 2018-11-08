import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import animations from "../utils/animations";

const Content = styled.div`
  padding: 30px 50px 150px;
  width: 80%;
  margin: auto;
  animation: ${animations.fadeIn} 0.4s linear;
  @media screen and (max-width: 600px) {
    width: auto;
    padding: 30px 15px 200px;
  }
`;

const Layout = ({ title, children }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio
        obcaecati ut quisquam libero asperiores, officiis similique delectus
        reiciendis. Porro sint voluptate quia molestiae. Consequatur pariatur
        numquam fugit corrupti labore!"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Navbar />
    <Content>{children}</Content>
    <Footer />
  </>
);

Layout.propTypes = {
  title: PropTypes.string
};

Layout.defaultProps = {
  title: "Page Title"
};

export default Layout;

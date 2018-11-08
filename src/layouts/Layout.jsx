import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "already-styled-components";

import Footer from "../components/Footer";
import animations from "../utils/animations";
import logo from "../images/battery.svg";

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

const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    font-size: 40px;
  }

  img {
    max-height: 70px;
    margin-right: 10px;
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
    <Navbar
      brand={
        <Brand>
          <img src={logo} alt="brand logo" />
          <div>Brand name</div>
        </Brand>
      }
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/sfsadfas">Invalid page</Link>
      </li>
    </Navbar>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const NavbarContainer = styled.div`
  background-color: #313131;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 40px;
  font-size: 22px;
  min-height: 100px;

  @media screen and (max-width: 600px) {
    padding: 0 0 0 20px;
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

const DesktopList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  margin-left: auto;

  li {
    margin-right: 50px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  margin-left: auto;
  @media screen and (min-width: 601px) {
    display: none;
  }
`;

const MobileListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1e6464;
  z-index: 1;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
const MobileList = styled.ul`
  display: flex;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 20px;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobile: false
    };

    this.showMobile = this.showMobile.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  showMobile() {
    this.setState({ showMobile: true });
  }

  hideMobile() {
    this.setState({ showMobile: false });
  }

  render() {
    const { showMobile } = this.state;
    return (
      <NavbarContainer>
        <Brand>
          <img src="/images/battery.svg" alt="brand logo"/>
          <div>Brand name</div> 
        </Brand>
        <DesktopList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/sfsadfas">Invalid page</Link>
          </li>
        </DesktopList>
        <MobileMenu>
          <Button transparent onClick={this.showMobile} aria-label="open mobile menu">
            <FontAwesomeIcon size="2x" icon={faBars} />
          </Button>
          {showMobile && (
            <MobileListContainer>
              <Button transparent onClick={this.hideMobile} aria-label="close mobile menu">
                <FontAwesomeIcon size="2x" icon={faTimes} />
              </Button>
              <MobileList>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
                <li>
                  <Link to="/sfsadfas">Invalid page</Link>
                </li>
              </MobileList>
            </MobileListContainer>
          )}
        </MobileMenu>
      </NavbarContainer>
    );
  }
}

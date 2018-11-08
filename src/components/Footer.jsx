import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #444;
  padding: 30px;
  color: whitesmoke;
  min-height: 80px;

  a {
    text-decoration: none;
    color: #00f8fb;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>
      <a href="https://github.com/MarkosKon/cra-starter">Source code</a> on
      GitHub
    </p>
    <div>
      Icons made by{" "}
      <a href="http://www.freepik.com" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>{" "}
      is licensed by{" "}
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC 3.0 BY
      </a>
    </div>
  </FooterContainer>
);

export default Footer;

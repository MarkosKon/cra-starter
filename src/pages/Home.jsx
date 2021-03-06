import React from "react";
import styled from "styled-components";
import { Button } from "already-styled-components";

import Layout from "../layouts/Layout";
import PageTitle from "../components/PageTitle";

const HeroContainer = styled.div`
  width: 50%;
  margin: auto;
  font-size: 24px;

  @media screen and (max-width: 600px) {
    width: auto;
    font-size: 20px;
  }
`;
const Home = () => (
  <Layout title={"CRA Boilerplate"}>
    <HeroContainer>
      <PageTitle fontSize="80px">Home Page</PageTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        officia iure repellendus corrupti sunt, odit eaque harum cumque, a fuga
        asperiores amet? Sunt ipsa a veniam temporibus, eveniet quibusdam?
        Maiores!
      </p>
      <Button aria-label="call to action">CALL TO ACTION</Button>
    </HeroContainer>
  </Layout>
);

export default Home;

import React from "react";
import styled from "styled-components";

import { Button, ProgressBar } from "already-styled-components";

const ErrorBackground = styled.div`
  background-color: black;
  font-size: 24px;
  color: white;
  opacity: 0.7;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 22px;
    display: block;
  }
`;

const Loading = props => {
  if (props.error)
    // When the loader has errored
    return (
      <ErrorBackground>
        <div>
          <div>Oops! Something went wrong..</div>
          <Button color="white" bgColor="green" onClick={props.retry}>
            Retry
          </Button>
        </div>
      </ErrorBackground>
    );
  else if (props.pastDelay) return <ProgressBar visible={true} />;
  // else if (props.pastDelay) return <div>Loading...</div>;
  else return null; // When the loader has just started
};

export default Loading;

import React from "react";
import styled from "styled-components";

import ProgressBar from "already-styled-components";

const ErrorBackground = styled.div`
  background-color: black;
  font-size: 24px;
  color: white;
  opacity: 0.7;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
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
          <button
            type="button"
            className="btn btn-success mt-3"
            onClick={props.retry}
          >
            Retry
          </button>
        </div>
      </ErrorBackground>
    );
  else if (props.pastDelay) return <ProgressBar visible={true} />;
  // else if (props.pastDelay) return <div>Loading...</div>;
  else return null; // When the loader has just started
};

export default Loading;

import styled from "styled-components";
import PropTypes from "prop-types";

const PageTitle = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
`;

PageTitle.protoTypes = {
  fontSize: PropTypes.string
};

PageTitle.defaultProps = {
  fontSize: "60px"
};

export default PageTitle;

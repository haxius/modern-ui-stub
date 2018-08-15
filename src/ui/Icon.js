import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Flex } from "grid-styled";

const StyledFlex = styled(Flex).attrs({
  className: "ui--icon"
})`
  ${({ theme: { colors }, color }) => `
    height: auto;
    color: ${!!color ? colors[color] : "inherit"};
  `}
`;

const Icon = ({ mdi, ...otherProps }) => (
  <StyledFlex alignItems="center" {...otherProps}>
    {mdi}
  </StyledFlex>
);

Icon.propTypes = {
  mdi: PropTypes.any.isRequired
};

export default Icon;

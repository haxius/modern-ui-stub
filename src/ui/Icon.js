import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Flex } from "grid-styled";

const StyledFlex = styled(Flex).attrs({
  className: "ui--icon"
})`
  ${({
    theme: {
      type: { body1 }
    }
  }) => `
    ${body1}
    height: auto;
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

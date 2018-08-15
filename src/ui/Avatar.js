import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";
import styled from "styled-components";

const BaseAvatar = styled(Box).attrs({
  className: "ui--avatar"
})`
  ${({
    size,
    theme: {
      space,
      avatar: { backgroundColor }
    }
  }) => `
    width: ${space[size]}px;
    height: ${space[size]}px;
    border-radius: 50%;
    background-color: ${backgroundColor};
  `}
`;

const Avatar = ({ size, ...extraProps }) => (
  <Box {...extraProps}>
    <BaseAvatar size={size} />
  </Box>
);

Avatar.propTypes = {
  size: PropTypes.any.isRequired
};

export default Avatar;

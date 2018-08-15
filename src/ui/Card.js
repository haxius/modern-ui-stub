import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";
import StretchBox from "./StretchBox";

const BaseCard = StretchBox.extend.attrs({
  className: "ui--card"
})`
  ${({
    theme: {
      card: { shadow, backgroundColor },
      space,
      colors
    },
    background,
    color,
    gradient
  }) => `
    color: ${!!color ? colors[color] : "inherit"};
    background-color: ${!!background ? colors[background] : backgroundColor}
    padding: ${space[4]}px;
    box-shadow: ${shadow};

    ${gradient && `
      background-image: linear-gradient(to right,${gradient[0]} 0,${
        gradient[1]
      } 100%)
    `}
  `}
`;

const Card = ({ background, color, gradient, children, ...otherProps }) => (
  <Box {...otherProps} p={2} className="ui--cardWrapper">
    <BaseCard background={background} color={color} gradient={gradient}>
      {children}
    </BaseCard>
  </Box>
);

Card.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  gradient: PropTypes.array,
  children: PropTypes.any
};

export default Card;

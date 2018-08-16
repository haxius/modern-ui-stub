import React from "react";
import styled from "styled-components";
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
    gradient,
  }) => `
    color: ${!!color ? colors[color] : "inherit"};
    background-color: ${!!background ? colors[background] : backgroundColor}
    padding: ${space[4]}px;
    box-shadow: ${shadow};

    ${gradient &&
      `
      background-image: linear-gradient(to right,${gradient[0]} 0,${
        gradient[1]
      } 100%)
    `}
  `};
`;

const CardTitle = styled.div`
  text-transform: uppercase;

  ${({ theme: { space } }) => `
      margin-bottom: ${space[4]}px;
  `};
`;

const Card = ({
  background,
  color,
  gradient,
  title,
  scroll,
  children,
  ...otherProps
}) => (
  <Box {...otherProps} p={2} className="ui--cardWrapper">
    <BaseCard scroll={scroll} background={background} color={color} gradient={gradient}>
      {!!title && <CardTitle>{title}</CardTitle>}
      {children}
    </BaseCard>
  </Box>
);

Card.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  gradient: PropTypes.array,
  title: PropTypes.string,
};

export default Card;

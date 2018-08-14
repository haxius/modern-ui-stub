import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "grid-styled";
import { ChevronDownIcon } from "mdi-react";

import StretchFlex from './StretchFlex';
import Icon from './Icon';

const StyledBox = styled(Box).attrs({
  className: "ui--dropdown-caption"
})`
  ${({
    theme: {
      type: { body1 }
    }
  }) => `
    ${body1}
  `}
`;

const ListItemExpander = styled(ChevronDownIcon).attrs({
  className: "ui--dropdown-expander"
})`
  ${({
    theme: {
      type: { overline }
    }
  }) => `
    ${overline}
  `}
`;

const DropDown = ({ caption, noExpander }) => (
  <StretchFlex alignItems="center" className="ui--dropdown" stretchx="auto">
    <StyledBox>{caption}</StyledBox>
    {!!noExpander || <Icon mdi={<ListItemExpander />} />}
  </StretchFlex>
);

DropDown.propTypes = {
  caption: PropTypes.any.isRequired,
  withIcon: PropTypes.bool
};

export default DropDown;

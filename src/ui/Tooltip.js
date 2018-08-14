import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  > span {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    > span {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Tooltip = ({ text, children }) => (
  <StyledTooltip>
    {children}
    <span>{text}</span>
  </StyledTooltip>
);

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tooltip;

import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const StyledAreaChart = styled(AreaChart)`
  ${({ absolute }) => `
    ${!!absolute && `
      position: absolute;
    `}
  `}
`;

const StackedAreaChart = ({ data, width = 0, height = 0, absolute }) => (
  <StyledAreaChart width={width} height={height} data={data} absolute={absolute}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area
      type="monotone"
      dataKey="uv"
      stackId="1"
      stroke="#8884d8"
      fill="#8884d8"
    />
    <Area
      type="monotone"
      dataKey="pv"
      stackId="1"
      stroke="#82ca9d"
      fill="#82ca9d"
    />
    <Area
      type="monotone"
      dataKey="amt"
      stackId="1"
      stroke="#ffc658"
      fill="#ffc658"
    />
  </StyledAreaChart>
);

StackedAreaChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  absolute: PropTypes.bool
};

export default StackedAreaChart;

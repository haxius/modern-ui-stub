import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const StyledBarChart = styled(BarChart)`
  ${({ absolute }) => `
    ${!!absolute &&
      `
      position: absolute;
    `}
  `};
`;

const SimpleBarChart = ({ data, width = 0, height = 0, absolute }) => (
  <StyledBarChart width={width} height={height} data={data} absolute={absolute}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="pv" fill="#8884d8" />
    <Bar dataKey="uv" fill="#82ca9d" />
  </StyledBarChart>
);

SimpleBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  absolute: PropTypes.bool
};

export default SimpleBarChart;

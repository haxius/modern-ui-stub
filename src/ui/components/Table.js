import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StretchFlex from "./StretchFlex";
import StretchBox from "./StretchBox";

const TableHeaderRow = StretchFlex.extend.attrs({
  className: "ui--table-headerRow",
  stretchy: "auto"
})`
  ${({
    theme: {
      colors: { gray, white },
      type: { body1 }
    }
  }) => `
    ${body1}
    background-color: ${white};
    border-bottom: 2px solid ${gray};
  `};

  text-transform: uppercase;
  position: sticky;
  top: 0;
`;

const TableRow = StretchFlex.extend.attrs({
  className: "ui--table-row",
  stretchy: "auto"
})`
  ${({
    theme: {
      colors: { gray },
      type: { body1 }
    }
  }) => `
    ${body1}
    border-bottom: 1px solid ${gray};
  `};
`;

const TableCell = StretchBox.extend.attrs({
  className: "ui--table-cell"
})`
  ${({ theme: { space } }) => `
    padding: ${space[2]}px;
  `};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledTable = StretchFlex.extend.attrs({
  flexDirection: "column",
  stretchy: "auto"
})`
  > .ui--table-row:last-child {
    border-bottom: 0px;
  }
`;

const TableWrapper = styled.div.attrs({
  className: "ui--table"
})`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ height }) => `
    ${!!height &&
      `
      max-height: ${height}px;
      overflow-y: scroll;
    `}
  `};
`;

const Table = ({ data: { head, rows }, height }) => (
  <TableWrapper height={height}>
    <StyledTable>
      <TableHeaderRow>
        {head.map((col, index) => (
          <TableCell key={`header-col-${index}`}>{col}</TableCell>
        ))}
      </TableHeaderRow>
      {rows.map((row, index) => (
        <TableRow key={`table-row-${index}`}>
          {row.map((col, subIndex) => (
            <TableCell key={`table-row-${index}-col-${subIndex}`}>
              {col}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </StyledTable>
  </TableWrapper>
);

Table.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number
};

export default Table;

import React from "react";
import PropTypes from "prop-types";

import { Card, StretchFlex, StretchBox, Icon } from "../ui";

const SummaryCard = ({ gradient, mdi, title, value }) => (
  <Card gradient={gradient}>
    <StretchFlex p={2} maxx="216px">
      <StretchBox width={1 / 3}>
        <Icon mdi={mdi} color="white" />
      </StretchBox>
      <StretchBox width={2 / 3}>
        <StretchFlex flexDirection="column">
          <StretchBox color="white">{title}</StretchBox>
          <StretchBox color="white">{value}</StretchBox>
        </StretchFlex>
      </StretchBox>
    </StretchFlex>
  </Card>
);

SummaryCard.propTypes = {
  mdi: PropTypes.object.isRequired,
  gradient: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default SummaryCard;

import React from 'react';
import { Box } from 'grid-styled';
import { Brand, StretchFlex } from '../ui';

export default (
  <StretchFlex alignItems="center" ml={4} className="common--sidebar-header">
    <Box mr={2}><img alt="" src="./stack-logo-light.png"/></Box>
    <Brand>Stack</Brand>
  </StretchFlex>
);

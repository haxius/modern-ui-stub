import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';

import {
  MenuIcon,
  DotsVerticalIcon,
} from 'mdi-react';

import { StretchFlex, Icon, Brand } from '../ui';

const MobileHeader = ({ handleHamburger }) => (
  <StretchFlex alignItems="center" className="common--header">
    <Box width={1/3} pl={4} onClick={handleHamburger}>
      <Icon mdi={<MenuIcon/>}/>
    </Box>
    <Box width={1/3}>
      <StretchFlex alignItems="center" justifyContent="center" className="common--sidebar-header">
        <Box mr={2}><img alt="" src="./stack-logo-light.png"/></Box>
        <Brand>Stack</Brand>
      </StretchFlex>
    </Box>
    <Box width={1/3} pr={4}>
      <StretchFlex justifyContent="flex-end" alignItems="center">
        <Icon mdi={<DotsVerticalIcon/>}/>
      </StretchFlex>
    </Box>
  </StretchFlex>
);

MobileHeader.propTypes = {
  handleHamburger: PropTypes.func.isRequired
};

export default MobileHeader;

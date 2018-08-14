import React from 'react';
import { Box } from 'grid-styled';
import Flag from "react-flags";

import {
  FullscreenIcon,
  MagnifyIcon,
  BellOutlineIcon,
  EmailOutlineIcon,
} from 'mdi-react';

import { Avatar, DropDown, StretchFlex, Icon } from '../ui';
import Theme from './Theme';

const { space } = Theme;

const FlagCaption = (
  <Box mr={1}>
    <Flag
      basePath=""
      name="GB"
      format="png"
      pngSize={space[5]}
      shiny={false}
      alt="UK Flag"
    />
  </Box>
);

export default (
  <StretchFlex alignItems="center" className="common--header">
    <Box width={1/2} pl={4}>
      <StretchFlex justifyContent="flex-start" alignItems="center">
        <DropDown caption="Mega"/>
        <Icon mdi={<FullscreenIcon/>} ml={2}/>
        <Icon mdi={<MagnifyIcon/>} ml={6}/>
      </StretchFlex>
    </Box>
    <Box width={1/2} pr={4}>
      <StretchFlex justifyContent="flex-end" alignItems="center">
        <DropDown caption={FlagCaption}/>
        <Icon mdi={<BellOutlineIcon/>} ml={3}/>
        <Icon mdi={<EmailOutlineIcon/>} ml={3}/>
        <Avatar size={5} ml={4}/>
      </StretchFlex>
    </Box>
  </StretchFlex>
);

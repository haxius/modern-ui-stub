import React from "react";
import PropTypes from "prop-types";
import { Box } from "grid-styled";

import HeaderBar from "./HeaderBar";
import SideBar from "./SideBar";
import StretchFlex from "./StretchFlex";

const AnimatedBox = Box.extend.attrs({
  className: "ui--layout-animatedBox"
})`
  ${({ overflow = "hidden" }) => `
    transition: width 0.3s ease;
    overflow: ${overflow};
  `};
`;

const SidebarHeader = HeaderBar.extend.attrs({
  className: "ui--layout-sidebarHeader"
})`
  ${({
    theme: {
      sidebar: { backgroundColor },
      breakpoints: [mobile]
    }
  }) => `
    background-color: ${backgroundColor};
    width: 100%;

    @media screen and (max-width: ${mobile}) {
      display: none;
    }
  `}
`;

const MobileHeader = HeaderBar.extend.attrs({
  className: "ui--layout-mobileHeader",
  stretchy: "auto"
})`
  ${({
    theme: {
      sidebar: { backgroundColor, color }
    }
  }) => `
    color: ${color};
    background-color: ${backgroundColor};
  `}
`;

const Layout = ({
  header,
  mobileHeader,
  sidebarHeader,
  sidebar,
  children,
  forceSidebar,
  sidebarWidth
}) => {
  const mobileWidth = !!forceSidebar ? sidebarWidth : 0;

  return (
    <StretchFlex stretchx="auto" className="ui--layout">
      <AnimatedBox
        is="section"
        width={[`${mobileWidth}px`, `${sidebarWidth}px`]}
        className="ui--layout-sidebar"
      >
        <SideBar forceSidebar={forceSidebar} sidebarWidth={sidebarWidth}>
          <SidebarHeader>{sidebarHeader}</SidebarHeader>
          {sidebar}
        </SideBar>
      </AnimatedBox>
      <AnimatedBox
        is="section"
        width={[
          `calc(100% - ${mobileWidth}px)`,
          `calc(100% - ${sidebarWidth}px)`
        ]}
        overflow="visible"
        className="ui--layout-content"
      >
        <MobileHeader width={[1, 0]}>{mobileHeader}</MobileHeader>
        <HeaderBar width={[0, `calc(100% - ${sidebarWidth}px)`]}>
          {header}
        </HeaderBar>

        {children}
      </AnimatedBox>
    </StretchFlex>
  );
};

Layout.propTypes = {
  header: PropTypes.object.isRequired,
  mobileHeader: PropTypes.object.isRequired,
  sidebarHeader: PropTypes.object.isRequired,
  sidebar: PropTypes.object.isRequired,
  children: PropTypes.any,
  forceSidebar: PropTypes.any,
  sidebarWidth: PropTypes.number.isRequired
};

export default Layout;

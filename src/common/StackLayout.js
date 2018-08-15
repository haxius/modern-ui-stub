import React, { Component } from "react";
import { Layout } from "../ui";

import SidebarHeader from "./SidebarHeader";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Theme from "./Theme";

const {
  sidebar: { width: sidebarWidth }
} = Theme;

class StackLayout extends Component {
  state = { sidebarToggled: false };

  handleHamburger() {
    const { sidebarToggled } = this.state;

    this.setState({
      sidebarToggled: !sidebarToggled
    });
  }

  render() {
    const handleHamburger = () => this.handleHamburger();
    const { sidebarToggled } = this.state;
    const { children } = this.props;

    return (
      <Layout
        sidebarHeader={SidebarHeader}
        mobileHeader={<MobileHeader handleHamburger={handleHamburger} />}
        header={Header}
        sidebar={Sidebar}
        forceSidebar={sidebarToggled}
        sidebarWidth={sidebarWidth}
      >
        {children}
      </Layout>
    );
  }
}

export default StackLayout;

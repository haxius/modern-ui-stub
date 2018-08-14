import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "grid-styled";
import { ChevronDownIcon, ChevronUpIcon } from "mdi-react";

import Icon from './Icon';
import StretchFlex from './StretchFlex';

const StyledList = StretchFlex.extend.attrs({
  className: 'ui--list',
})`
  ${({ theme: { space }, tint }) => `
    min-width: 0;
    background-color: rgba(0,0,0,${tint ? "0.1" : "0"});
  `}
`;

const StyledBox = styled(Box).attrs({
  className: "ui--list-item"
})`
  ${({
    theme: {
      type: { body2 },
      sidebar: { color },
      space
    },
    maxwidth
  }) => `
    ${body2}
    
    // same as body-2 font-height
    line-height: 14px;

    text-overflow: ellipsis;
    white-space: nowrap;
    padding: ${space[3]}px 0 ${space[3]}px ${space[6]}px;
    color: ${color};
    max-width: ${maxwidth ? maxwidth : "auto"};
    overflow: hidden;
    cursor: pointer;
  `}
`;

const Spacer = styled(Box).attrs({
  className: "ui--list-itemSpacer"
})`
  flex-grow: 1;
  cursor: pointer;
`;

const ListItemExpander = styled(ChevronDownIcon).attrs({
  className: "ui--list-expander"
})`
  ${({
    theme: {
      type: { overline },
      sidebar: { color }
    },
    active
  }) => `
    ${overline}

    cursor: pointer;
    color: ${color};
    display: ${active ? "none" : "block"};
  `}
`;

const ListItemExpanded = ListItemExpander.withComponent(
  ChevronUpIcon
).extend.attrs({
  className: "ui--list-expanded"
})`
  ${({ active }) => `
    display: ${active ? "block" : "none"};
  `}
`;

class List extends Component {
  state = {
    toggled: false,
    active: 0
  };

  makeActive(index) {
    const { index: activeIndex, toggled: currentToggled } = this.state;

    if (activeIndex === index && !!currentToggled) {
      this.setState({
        toggled: false
      });
    } else {
      this.setState({
        toggled: true,
        active: index
      });
    }
  }

  render() {
    const { items, tint } = this.props;
    const { active, toggled } = this.state;

    return (
      <StyledList
        flexDirection="column"
        stretchy="auto"
        tint={tint}
      >
        {items.map(({ caption, children }, index) => {
          const makeActive = () => this.makeActive(index);
          const isActive = index === active && !!toggled;

          return (
            <Fragment key={`list--item-${index}`}>
              <StretchFlex stretchy="auto" onClick={makeActive} className="ui--list-itemWrapper">
                <StyledBox maxwidth="75%">{caption}</StyledBox>
                <Spacer />
                {!!children && (
                  <Fragment>
                    <Icon mdi={<ListItemExpander active={isActive ? 1 : 0} />} />
                    <Icon mdi={<ListItemExpanded active={isActive ? 1 : 0} />} />
                    <Box mr={6} />
                  </Fragment>
                )}
              </StretchFlex>
              {!!children && isActive && <List tint={1} items={children} />}
            </Fragment>
          );
        })}
      </StyledList>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;

import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BoundingBox = styled.div`
  ${({ aspectRatio, relative, stretch }) => `
    ${!!aspectRatio &&
      `
      display: grid;

      &:before {
        content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${aspectRatio}'></svg>");
      }

      > *,
      &:before {
        grid-area: 1 / 1 / 2 / 2;
      }
    `}

    ${!!relative &&
      `
      position: relative;
    `}

    ${!!stretch &&
      `
      width: 100%;
      height: 100%;
    `}
  `};
`;

class BoundsProvider extends Component {
  state = { width: 0, height: 0 };

  eventListener = null;
  element = null;

  static propTypes = {
    aspectRatio: PropTypes.string,
    relative: PropTypes.bool,
    stretch: PropTypes.bool
  };

  componentDidMount() {
    this.storeBounds();

    this.eventListener = window.addEventListener("resize", () =>
      this.storeBounds()
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.eventListener);
  }

  storeBounds() {
    const { offsetWidth: width, offsetHeight: height } = this.element;
    this.setState({ width, height });
  }

  render() {
    const { aspectRatio, relative, stretch, children } = this.props;
    const { width, height } = this.state;

    let forceHeight;

    if (!!aspectRatio) {
      const [x, y] = aspectRatio.split(" ");
      forceHeight = Math.ceil(width * (y / x));
    }

    const clones = Children.map(children, (child, key) =>
      React.cloneElement(child, {
        width,
        height: !!forceHeight ? forceHeight : height
      })
    );

    return (
      <BoundingBox
        aspectRatio={aspectRatio}
        relative={relative}
        stretch={stretch}
        innerRef={element => (this.element = element)}
      >
        {clones}
      </BoundingBox>
    );
  }
}

export default BoundsProvider;

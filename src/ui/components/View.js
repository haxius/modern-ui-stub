import styled from "styled-components";

export default styled.article.attrs({
  className: "ui--view"
})`
  ${({
    theme: {
      view: { backgroundColor },
      header: { height },
      breakpoints: [mobile],
      space
    }
  }) => `
    background-color: ${backgroundColor};
    padding-top: calc(${height}px + ${space[2]}px);
    padding-left: ${space[4]}px;
    padding-right: ${space[4]}px;
    padding-bottom: ${space[4]}px;
    min-height: 100%;
    min-width: 100vw;
    overflow-x: hidden;

    @media screen and (min-width: ${mobile}) {
      min-width: auto;
    }
  `}
`;

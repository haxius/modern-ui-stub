import styled from "styled-components";

export default styled.article.attrs({
  className: "ui--sidebar"
})`
  ${({
    theme: {
      sidebar: { backgroundColor, width },
      header: { height },
      space,
      breakpoints: [ mobile ]
    },
    forceSidebar,
    sidebarWidth
  }) => `
    background-color: ${backgroundColor};
    width: ${width}px;
    height: 100%;
    padding-top: calc(${height}px + ${space[2]}px);
    word-wrap: nowrap;
    overflow-x: hidden;

    position: fixed;
    top: 0px;
    left: 0px;

    ${!!forceSidebar || `
      @media screen and (max-width: ${mobile}) {
        left: -${sidebarWidth}px;
      }
    `}

    -ms-overflow-style: none;

    overflow: -moz-scrollbars-none;

    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: ${mobile}) {
      padding-top: ${space[2]}px;
    }
  `}
`;

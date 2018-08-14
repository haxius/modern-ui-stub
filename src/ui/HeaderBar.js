import { Box } from "grid-styled";
import styled from "styled-components";

export default styled(Box).attrs({
  className: "ui--headerbar",
  alignSelf: "flex-start"
})`
  ${({
    theme: {
      header: { backgroundColor, height, shadow }
    },
    transparent
  }) => `
    background-color: ${transparent ? "transparent" : backgroundColor};
    box-shadow: ${shadow};
    height: ${height}px;
    word-wrap: nowrap;
    overflow: hidden;
    position: fixed;
    top: 0px;
  `}
`;

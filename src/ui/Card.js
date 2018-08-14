import styled from "styled-components";
import { Box } from "grid-styled";

export default styled(Box).attrs({
  className: "ui--card"
})`
  ${({
    theme: {
      card: { shadow, backgroundColor },
      space
    },
    background
  }) => `
    background-color: ${!!background ? background : backgroundColor}
    padding: ${space[4]}px;
    box-shadow: ${shadow};
  `}
`;

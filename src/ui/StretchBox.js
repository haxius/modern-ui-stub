import styled from "styled-components";
import { Box } from "grid-styled";

const StretchBox = styled(Box).attrs({
  className: "ui--stretchbox"
})`
  ${({ stretchx = "100%", stretchy = "100%" }) => `
    width: ${stretchx};
    height: ${stretchy};
  `}
`;

export default StretchBox;

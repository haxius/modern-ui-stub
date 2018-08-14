import styled from "styled-components";
import { Flex } from "grid-styled";

const StretchFlex = styled(Flex).attrs({
  className: "ui--stretchflex"
})`
  ${({ stretchx = "100%", stretchy = "100%" }) => `
    width: ${stretchx};
    height: ${stretchy};
  `}
`;

export default StretchFlex;

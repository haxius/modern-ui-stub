import styled from "styled-components";
import { Flex } from "grid-styled";

const StretchFlex = styled(Flex).attrs({
  className: "ui--stretchflex"
})`
  ${({
    theme: { colors },
    stretchx = "100%",
    stretchy = "100%",
    maxx,
    maxy,
    color,
    backgroundColor
  }) => `
    width: ${stretchx};
    height: ${stretchy};
    max-width: ${!!maxx ? maxx : "auto"};
    max-height: ${!!maxy ? maxy : "auto"};
    color: ${!!color ? colors[color] : "inherit"};
    background-color: ${
      !!backgroundColor ? colors[backgroundColor] : "transparent"
    };
  `}
`;

export default StretchFlex;

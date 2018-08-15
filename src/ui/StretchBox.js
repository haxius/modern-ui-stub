import styled from "styled-components";
import { Box } from "grid-styled";

const StretchBox = styled(Box).attrs({
  className: "ui--stretchbox"
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

export default StretchBox;

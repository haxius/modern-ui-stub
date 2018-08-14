import styled from "styled-components";

export default styled.h5.attrs({
  className: "ui--brand"
})`
  ${({
    theme: {
      type: { h5 }
    }
  }) => `
    ${h5}
    margin: 0;
    padding: 0;
    color: white;
  `}
`;

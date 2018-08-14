import StretchFlex from "./StretchFlex";

export default StretchFlex.extend.attrs({
  className: "ui--cardgroup"
})`
  ${({
    theme: {
      breakpoints: [mobile],
      space
    }
  }) => `
    flex-direction: column;
    flex-wrap: wrap;

    > .ui--card {
      margin-top: ${space[4]}px;
      flex-grow: 1;
      flex-shrink: 0;
      width: 100%;

      &:first-child {
        margin-top: ${space[2]}px;
      }
    }

    @media screen and (min-width: ${mobile}) {
      flex-direction: row;

      > .ui--card {
        flex-grow: 0;
        width: calc(50% - ${space[2]}px);
        margin-top: ${space[2]}px;
        
        &:nth-child(odd) {
          margin-right: ${space[4]}px;
        }
      }
    }
  `}
`;

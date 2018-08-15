import StretchFlex from "./StretchFlex";

export default StretchFlex.extend.attrs({
  className: "ui--cardgroup"
})`
  ${({
    theme: {
      breakpoints: [mobile, tablet, desktop, largeDesktop],
      space
    },
    columns
  }) => `
    flex-direction: column;
    flex-wrap: wrap;

    > .ui--cardWrapper {
      flex-grow: 1;
      flex-shrink: 0;
      width: 100%;
    }

    @media screen and (min-width: ${mobile}) {
      flex-direction: row;

      > .ui--cardWrapper {
        flex-grow: 0;
      }
    }

    ${!!columns && "string" === typeof columns && `
      @media screen and (min-width: ${mobile}) {
        > .ui--cardWrapper {
          width: ${100 / columns}%;
        }
      }
    `}

    ${!!columns && "object" === typeof columns && `
      ${1 <= columns.length && `
        @media screen and (min-width: ${mobile}) {
          > .ui--cardWrapper {
            width: ${100 / columns[0]}%;
          }
        }
      `}
      ${2 <= columns.length && `
        @media screen and (min-width: ${tablet}) {
          > .ui--cardWrapper {
            width: ${100 / columns[1]}%;
          }
        }
      `}
      ${3 <= columns.length && `
        @media screen and (min-width: ${desktop}) {
          > .ui--cardWrapper {
            width: ${100 / columns[2]}%;
          }
        }
      `}
      ${4 <= columns.length && `
        @media screen and (min-width: ${largeDesktop}) {
          > .ui--cardWrapper {
            width: ${100 / columns[3]}%;
          }
        }
      `}
    `}
  `}
`;

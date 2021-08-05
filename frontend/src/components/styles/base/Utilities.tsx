export const typography = (props: any) => `
	${props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
	${props.textAlign ? `text-align: ${props.textAlign};` : ''}
`;
export const color = (props: any) => `
  ${props.color ? `color: ${props.theme.colors[`${props.color}`]};` : ''}
`;
export const margin = (props: any) => `
		${
      props.marginTop
        ? `margin-top: ${props.marginTop ? `${props.marginTop}px` : '0'}};`
        : ''
    }
		${
      props.marginBottom
        ? `margin-bottom: ${
            props.marginBottom ? `${props.marginBottom}px` : '0'
          }};`
        : ''
    }
		${
      props.marginLeft
        ? `margin-left: ${props.marginLeft ? `${props.marginLeft}px` : '0'};`
        : ''
    }
		${
      props.marginRight
        ? `margin-right: ${props.marginRight ? `${props.marginRight}px` : '0'};`
        : ''
    }
	`;

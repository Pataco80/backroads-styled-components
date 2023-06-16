import React from "react"
import styled from "styled-components"
import { setColor } from "../styles/colors"

const Title = props => {
  const { tag: Tag, title, className, children } = props
  return <Tag className={className}>{title || children}</Tag>
}

export default styled(Title)`
  margin: ${props => (props.margin ? props.margin : null)};

  i,
  &.black {
    color: ${setColor.mainBlack};
  }
  ${({ notUpercase }) =>
    notUpercase &&
    `
    text-transform:none;
  `}
`

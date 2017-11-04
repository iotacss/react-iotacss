import React from 'react'
import classnames from 'classnames'

import {
  Type,
  Media,
  P
} from '../../src'


const Post = ({
  title,
  date,
  className,
  ...props
}) => {
  return (
    <Media gutter="x4" {...props}>
      <Media.Fixed>
        <Type size="ms1" uColor="grey" tagName="date">{date}</Type>
      </Media.Fixed>
      <Media.Fluid>
        <P size="ms1" uColor="purple">
          <a href="#">{title}</a>
        </P>
      </Media.Fluid>
    </Media>
  )
}


export default Post

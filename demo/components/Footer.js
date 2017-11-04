import React from 'react'
import classnames from 'classnames'

import {
  Base,
  Container,
  List,
  Media,
  Type
} from '../../src'


const Footer = ({
  className,
}) => {
  return (
    <Base uBgcolor="purple" uColor="white" uPv="x3">
      <Container>
        <Media res rev>
          <Media.Fixed uText="center left@sm" uMb="x2@xs">
            <Type uWeight="bold">Follow us on twitter</Type>
          </Media.Fixed>
          <Media.Fluid>
            <Type>Copyright © 2017 iotaCSS. All rights reserved.</Type>
          </Media.Fluid>
        </Media>
      </Container>
    </Base>
  )
}


export default Footer

import React from 'react'
import classnames from 'classnames'

import logo from '../svg/logo.svg'

import {
  Base,
  Container,
  List,
  Media
} from '../../src'


const Header = ({
  className,
  ...props
}) => {
  return (
    <Base uBgcolor="purple" uPv="x2" {...props}>
      <Container>
        <Media res align="middle">
          <Media.Fixed uText="center left@sm" uMb="x3@xs">
            <a href="#">
              <img src={logo} />
            </a>
          </Media.Fixed>
          <Media.Fluid>
            <List gutter="x4" uText="center right@sm" uColor="white" uWeight="bold">
              <List.Item>
                <a href="#">List Item 1</a>
              </List.Item>
              <List.Item>
                <a href="#">List Item 2</a>
              </List.Item>
              <List.Item>
                <a href="#">List Item 3</a>
              </List.Item>
            </List>
          </Media.Fluid>
        </Media>
      </Container>
    </Base>
  )
}


export default Header

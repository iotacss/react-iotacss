import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Importing all CSS from iotaCSS
import './scss/main.scss';

// Importing custom React Components
import PageSection from './components/PageSection';
 

import {
  Container,
  Grid,
  List,
  Media,
  H1,
  P
} from '../lib'


class App extends React.Component {
  render() {
    return (
      <Container gutter="small">

        <PageSection uText="center">
          <H1 size="large" uMt uMb="all @sm large@md">A super simple example</H1>
          <P>A simple example on how to setup and use `react-iotacss`.</P>
        </PageSection>

        <PageSection>
          <H1 size="medium" uText="center" uMb>List Object</H1>
          <List>
            <List.Item>Inline List Item 1</List.Item>
            <List.Item>Inline List Item 2</List.Item>
          </List>
        </PageSection>

        <PageSection>
          <H1 size="medium" uText="center" uMb>Media Object</H1>
          <Media>
            <Media.Fixed>
              Fixed Part
            </Media.Fixed>
            <Media.Fluid>
              Fluid Part
            </Media.Fluid>
          </Media>
        </PageSection>

        <PageSection>
          <H1 size="medium" uText="center" uMb>Grid Object</H1>
          <Grid>
            <Grid.Column uSize="1/2">
              Half Column
            </Grid.Column>
            <Grid.Column uSize="1/2">
              Half Column
            </Grid.Column>
          </Grid>
        </PageSection>

      </Container>
    )
  }
}

const div = document.getElementById('app')
ReactDOM.render(<App />, div)

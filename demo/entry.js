import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Importing all CSS from iotaCSS
import './scss/main.scss'

// Importing custom React Components
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Card from './components/Card'
import Post from './components/Post'

import {
  Container,
  Grid,
  List,
  H1,
  H2,
  P
} from '../lib'


class App extends React.Component {
  render() {
    return (
      <div>

        
        <Header uMb="x8" />


        <Container uMb="x8">


          <Grid align="middle" uMb="x8">
            <Grid.Column uSize="1/2">
              <H1 size="ms3" uWeight="bold">Dashboard</H1>
            </Grid.Column>
            <Grid.Column uSize="1/2" uText="right">
              <Button>Add new</Button>
            </Grid.Column>
          </Grid>


          <Grid gutter="x4" align="middle" uText="center" uMb="x8">
            <Grid.Column uSize="1/3@sm" uMb="x2@xs">
              <Card>
                <H2 size="ms6" uColor="purple" uMb="x3">10</H2>
                <P size="ms1">Published posts</P>
              </Card>
            </Grid.Column>
            <Grid.Column uSize="1/3@sm" uMb="x2@xs">
              <Card>
                <H2 size="ms6" uColor="red" uMb="x3">10</H2>
                <P size="ms1">Deleted posts</P>
              </Card>
            </Grid.Column>
            <Grid.Column uSize="1/3@sm" uMb="x2@xs">
              <Card>
                <H2 size="ms6" uColor="grey-dark" uMb="x3">10</H2>
                <P size="ms1">Scheduled posts</P>
              </Card>
            </Grid.Column>
          </Grid>


          <Card>
            <Grid align="middle" uMb="x5">
              <Grid.Column uSize="1/2">
                <H2 size="ms2" uWeight="bold">All posts</H2>
              </Grid.Column>
              <Grid.Column uSize="1/2" uText="right">
                <Button type="outline">View all</Button>
              </Grid.Column>
            </Grid>

            <List type="block">
              <List.Item uMb="x3">
                <Post
                  title="Explain the archicture and overall logic behind iota CSS"
                  date="18/7/2017" />
              </List.Item>
              <List.Item uMb="x3">
                <Post
                  title="Explain the archicture and overall logic behind iota CSS"
                  date="18/7/2017" />
              </List.Item>
              <List.Item uMb="x3">
                <Post
                  title="Explain the archicture and overall logic behind iota CSS"
                  date="18/7/2017" />
              </List.Item>
              <List.Item uMb="x3">
                <Post
                  title="Explain the archicture and overall logic behind iota CSS"
                  date="18/7/2017" />
              </List.Item>
            </List>
          </Card>


        </Container>


        <Footer />


      </div>
    )
  }
}

const div = document.getElementById('app')
ReactDOM.render(<App />, div)

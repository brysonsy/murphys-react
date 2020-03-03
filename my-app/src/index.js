import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Image, Dropdown, Icon, Grid, Header, List, Item } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='topmenu'>
          <Container>
            <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png" size='small' left/>
            <Menu.Item position='right'>Home</Menu.Item>
            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Placeholder</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>St. Patrick's Day</Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>Placeholder</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="murphys-background">
          <Grid container verticalAlign="middle" style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.Column>
                <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
              </Grid.Column>
              <Grid.Column>
                <Header as="h3" inverted>
                  A traditional downtown saloon and eatery located in the Honolulu Financial District,
                  just one block off the waterfront, Murphy's has been a haven for mariners, businessmen, and
                  locals since 1891.
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Container>
            <Grid columns="three">
              <Grid.Column>
                <Item>Lunch</Item>
                <hr/>
                <List>
                  <List.Item>Monday-Friday: 11:00am - 2:30pm</List.Item>
                  <List.Item>Saturday-Sunday: Not open for lunch</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Item>Bar</Item>
                <hr/>
                <List>
                  <List.Item>Monday-Friday from 11:00am</List.Item>
                  <List.Item>Saturday-Sunday from 4:00pm</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Item>Dinner</Item>
                <hr/>
                <List>
                  <List.Item>Monday-Friday: 5:30pm - 10:00pm</List.Item>
                  <List.Item>Sunday: 5:00pm - 9:00pm</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}

class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(
    <Murphys/>
    , document.getElementById('root'));
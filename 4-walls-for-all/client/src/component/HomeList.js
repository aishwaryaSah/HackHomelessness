import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getHomesQuery } from '../queries/queries';
import { Card, Button, CardGroup, Table } from 'react-bootstrap';
import './homelist.css';
//components
import HomeDetails from './HomeDetails';

class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayHomes() {
    var data = this.props.data;
    if (data.loading) {
      return <div> Loading Homes... </div>;
    } else {
      return data.homes.map((home, index) => {
        return (
          <tr>
            <td
              key={home.id}
              onClick={e => {
                this.setState({ selected: home.id });
              }}
            >
              {home.name}
            </td>
          </tr>
        );
      });
    }
  }
  render() {
    return (
      <div className="homelist">
        <HomeDetails homeId={this.state.selected} />
        <h2>All shelter Homes:</h2>
        <Table striped bordered hover size="sm">
          <tbody>{this.displayHomes()}</tbody>
        </Table>
        {/* <ul id="home-list">{this.displayHomes()}</ul> */}
      </div>
    );
  }
}

export default graphql(getHomesQuery)(HomeList);

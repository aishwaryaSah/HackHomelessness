import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getHomeQuery } from '../queries/queries';
import { Card, Button, CardGroup, Table } from 'react-bootstrap';

class HomeDetails extends Component {
  displayHomeDetails() {
    const { home } = this.props.data;
    if (home) {
      return (
        <div>
          <h2>Selected Shelter Home Details: </h2>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <td>Name</td>
                <td>Home Addresss</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{home.name}</td>
                <td>{home.address}</td>
              </tr>
            </tbody>
          </Table>
          <br></br>
          <br></br>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return <div id="home-details">{this.displayHomeDetails()}</div>;
  }
}

export default graphql(getHomeQuery, {
  options: props => {
    return {
      variables: {
        id: props.homeId
      }
    };
  }
})(HomeDetails);

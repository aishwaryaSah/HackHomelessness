import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getHomeQuery } from '../queries/queries';

class HomeDetails extends Component {
  displayHomeDetails() {
    const { home } = this.props.data;
    if (home) {
      return (
        <div>
          <h3> selected shelter home </h3>
          <h4>{home.name}</h4>
          <h3> address: </h3>
          <h4>{home.address}</h4>
        </div>
      );
    } else {
      return <div> No Home selected... </div>;
    }
  }
  render() {
    console.log(this.props);
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

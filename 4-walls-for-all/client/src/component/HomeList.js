import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getHomesQuery } from '../queries/queries';

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
      return data.homes.map(home => {
        return (
          <li
            key={home.id}
            onClick={e => {
              this.setState({ selected: home.id });
            }}
          >
            {home.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="home-list">{this.displayHomes()}</ul>
        <HomeDetails homeId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getHomesQuery)(HomeList);

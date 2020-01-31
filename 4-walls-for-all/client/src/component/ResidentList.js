import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getResidentsQuery } from '../queries/queries';

//components
import ResidentDetails from './ResidentDetails';

class ResidentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  displayResidents() {
    var data = this.props.data;
    if (data.loading) {
      return <div> Loading Residents... </div>;
    } else {
      return data.residents.map(resident => {
        return (
          <li
            key={resident.id}
            onClick={e => {
              this.setState({ selected: resident.id });
            }}
          >
            {resident.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="resident-list">{this.displayResidents()}</ul>
        <ResidentDetails residentId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getResidentsQuery)(ResidentList);

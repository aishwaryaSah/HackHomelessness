import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getResidentQuery } from '../queries/queries';

class ResidentDetails extends Component {
  displayResidentDetails() {
    const { resident } = this.props.data;
    if (resident) {
      return (
        <div>
          <h2>{resident.name}</h2>
          <p>{resident.idproofnumber}</p>
          <p>{resident.home.name}</p>
          <p> All residents in this home: </p>
          <ul className="other-residents">
            {resident.home.residents.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div> No resident selected... </div>;
    }
  }
  render() {
    console.log(this.props);
    return <div id="resident-details">{this.displayResidentDetails()}</div>;
  }
}

export default graphql(getResidentQuery, {
  options: props => {
    return {
      variables: {
        id: props.residentId
      }
    };
  }
})(ResidentDetails);

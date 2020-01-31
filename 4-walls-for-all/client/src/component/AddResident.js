import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Form, Button } from 'react-bootstrap';
import './resident.css';
import {
  getHomesQuery,
  addResidentMutation,
  getResidentsQuery
} from '../queries/queries';
import { flowRight as compose } from 'lodash';

class AddResident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      idproofnumber: '',
      dob: '',
      gender: '',
      homeId: ''
    };
  }
  displayHomes() {
    var data = this.props.getHomesQuery;
    if (data.loading) {
      return <option disabled>loading Homes...</option>;
    } else {
      return data.homes.map(home => {
        return (
          <option key={home.id} value={home.id}>
            {home.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addResidentMutation({
      variables: {
        name: this.state.name,
        idproofnumber: this.state.idproofnumber,
        dob: this.state.dob,
        gender: this.state.gender,
        homeId: this.state.homeId
      },
      refetchQueries: [{ query: getResidentsQuery }]
    });
  }

  render() {
    return (
      <form id="add-resident" onSubmit={this.submitForm.bind(this)}>
        <div className="addResident">
          <h3>Fill this form to register any Homeless Person: </h3>
          {/* <Form onSubmit={this.submitForm.bind(this)}> */}
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              ref="name"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="idproofnumber">
            <Form.Label>ID Proof Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter id proof numer"
              ref="idproofnumber"
              onChange={e => this.setState({ idproofnumber: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="dob">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="text"
              placeholder="dd/mm/yyyy"
              ref="dob"
              onChange={e => this.setState({ dob: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Gender"
              ref="gender"
              onChange={e => this.setState({ gender: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="homeId">
            <Form.Label> Select Home </Form.Label>
            <Form.Control
              as="select"
              ref="homeId"
              onChange={e => this.setState({ homeId: e.target.value })}
            >
              <option> Select home</option>
              {this.displayHomes()}
            </Form.Control>
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        <br></br>
        <br></br>
      </form>
    );
  }
}

export default compose(
  graphql(getHomesQuery, { name: 'getHomesQuery' }),
  graphql(addResidentMutation, { name: 'addResidentMutation' })
)(AddResident);

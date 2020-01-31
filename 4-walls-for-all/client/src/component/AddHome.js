import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Form, Button } from 'react-bootstrap';
import './registerProperty.css';
import {
  getHomesQuery,
  addHomeMutation,
  getResidentsQuery
} from '../queries/queries';
import { flowRight as compose } from 'lodash';

class AddHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      bed: '',
      password: '',
      ownername: '',
      owneridnumber: '',
      owneremail: '',
      ownercontactnumber: ''
    };
  }
  //   displayHomes() {
  //     var data = this.props.getHomesQuery;
  //     if (data.loading) {
  //       return <option disabled>loading Homes...</option>;
  //     } else {
  //       return data.homes.map(home => {
  //         return (
  //           <option key={home.id} value={home.id}>
  //             {home.name}
  //           </option>
  //         );
  //       });
  //     }
  //   }

  submitForm(e) {
    e.preventDefault();
    this.props.addHomeMutation({
      variables: {
        name: this.state.name,
        address: this.state.address,
        bed: this.state.bed,
        password: this.state.password,
        ownername: this.state.ownername,
        owneremail: this.state.owneremail,
        ownercontactnumber: this.state.ownercontactnumber
      },
      refetchQueries: [{ query: getHomesQuery }]
    });
  }

  render() {
    return (
      <form id="add-home" onSubmit={this.submitForm.bind(this)}>
        <div className="signupForm">
          <h3>Fill this form to register any new Shelter Home: </h3>
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

          <Form.Group controlId="address">
            <Form.Label>Shelter Home address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Shelter Home address"
              ref="address"
              onChange={e => this.setState({ address: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="bed">
            <Form.Label>Number of Beds available</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter number of beds"
              ref="bed"
              onChange={e => this.setState({ bed: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Choose a password"
              ref="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="ownername">
            <Form.Label>Owner's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Owner's Name"
              ref="ownername"
              onChange={e => this.setState({ ownername: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="owneridnumber">
            <Form.Label>Owner's ID number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Owner's ID number"
              ref="owneridnumber"
              onChange={e => this.setState({ owneridnumber: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="owneremail">
            <Form.Label>Owner's Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Owner's Email"
              ref="owneremail"
              onChange={e => this.setState({ owneremail: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="ownercontactnumber">
            <Form.Label>Owner's Contact Numer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Owner's Contact Number"
              ref="ownercontactnumber"
              onChange={e =>
                this.setState({ ownercontactnumber: e.target.value })
              }
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          {/* </Form> */}
        </div>
      </form>
    );
  }
}

export default compose(
  graphql(getResidentsQuery, { name: 'getResidentsQuery' }),
  graphql(addHomeMutation, { name: 'addHomeMutation' })
)(AddHome);

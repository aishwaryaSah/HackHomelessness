import React from 'react'
import {Form, Button} from "react-bootstrap";
import "./registerProperty.css";

class RegisterProperty extends React.Component {
  
  constructor(props) {
    super(props);
}

submitFormHandler = event => {
  event.preventDefault();
  
  console.dir(this.refs.id.value);
}

render() {
    return (
      <div className="signup">
        <h3>Fill this form to register your property: </h3>
        <Form 
          onSubmit={(e) => this.submitFormHandler(e)}>
          <Form.Group controlId="id" >
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter id" ref="id" />
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" ref="name"/>
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" ref="email"/>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref="pwd"/>
          </Form.Group>

          <Form.Group controlId="owner_id">
            <Form.Label>Owner ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Onwer's Id" ref="owner_id"/>
          </Form.Group>

          <Form.Group controlId="owner_name">
            <Form.Label>Owner Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Owner's name" ref="owner_name"/>
          </Form.Group>

          <Form.Group controlId="owner_email">
            <Form.Label>Owner's Email ID</Form.Label>
            <Form.Control type="email" placeholder="Enter Owner's email" ref="owner_email"/>
          </Form.Group>

          <Form.Group controlId="owner-contactNumber">
            <Form.Label>Owner Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Owner's Contact Number" ref="owner_contact"/>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default RegisterProperty
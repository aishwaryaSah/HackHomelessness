import React from 'react'
import {Form, Button} from "react-bootstrap";
import "./registerProperty.css";

class HomelessRegister extends React.Component {
  
  constructor(props) {
    super(props);

}

submitFormHandler = event => {
  event.preventDefault();
  
  console.dir(this.refs.id.value);//Print the number of residents here. I will move it to UI Decorated view
}

render() {
    return (
      <div className="signup">
        <h3>Fill this form to register any Homeless Person: </h3>
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

          <Form.Group controlId="idProof">
            <Form.Label>ID Proof</Form.Label>
            <Form.Control type="text" placeholder="Enter ID Proof Number" ref="idProof"/>
          </Form.Group>

          <Form.Group controlId="dob">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="text" placeholder="dd/mm/yyyy" ref="dob"/>
          </Form.Group>

          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="Enter Gender" ref="gender"/>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default HomelessRegister
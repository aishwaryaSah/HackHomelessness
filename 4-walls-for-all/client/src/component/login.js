import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <form>
        <div className="login">
          <h3>Enter Login Details:</h3>
          {/* <Form onSubmit={this.submitForm.bind(this)}> */}
          <Form.Group controlId="name">
            <Form.Label>User Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email ID"
              // ref="name"
              // onChange={e => this.setState({ name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              // ref="idproofnumber"
              // onChange={e => this.setState({ idproofnumber: e.target.value })}
            />
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
export default Login;

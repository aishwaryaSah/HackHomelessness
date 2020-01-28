import React from 'react'
import {Form, Button} from "react-bootstrap";
import "./footer.css";

class Footer extends React.Component {
  
  render() {
    return (
      <div className="footer">
        <table>
          <tr>
            <td>
              <div className="col1">
                <h3>4 Walls For All</h3>
                <p>Help those who can't help themselves.</p>
                <br></br>
                <br></br>
                <strong>Email:</strong> support@4wallsforall.com
                <br></br>
                <strong>Phone:</strong> 123-456-7890
                <br></br>
                <strong>Registered Charity:</strong> 12345-67
                <br></br>
              </div>
            </td>
            <td>
              <div className="col2">
                <h3>Get Monthly Updates</h3>
                <Form >
                  <Form.Group controlId="id" >
                    <Form.Label>Enter your Email here *</Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Ente Email ID" />
                  </Form.Group>
                  <br></br>
                  <Button variant="primary" type="submit" >
                    Submit
                  </Button>
                </Form>
              </div>
            </td>
            <td>
              <div className="col3">
                <h3>Quick Links</h3>
                <ul>
                  <li><a>About</a></li>
                  <li><a>About</a></li>
                  <li><a>About</a></li>
                  <li><a>About</a></li>
                  <li><a>About</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
        <div className="lowest">
          © 2023 by Woman PWR. Proudly created with Wix.com |  Terms of Use  |   Privacy Policy
        </div>
      </div>
    );
  }
}
export default Footer
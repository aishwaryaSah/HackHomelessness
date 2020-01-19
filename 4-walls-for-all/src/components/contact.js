import React from 'react'
import "./contact.css";
import contact from "../media/images/contact.png";
import map from "../media/images/map.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends React.Component {
  
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className="contact">
        <div className="banner">
          <p>Contact</p>
        </div>
        <div className="address">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="valueText">
                    <h2>Get In Touch</h2>
                    <p> 500 Terry Francois Street San Francisco, CA 94158
                      <br></br>
                    info@mysite.com  |   123-456-7890</p>
                    <form>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              Enter Your Name *
                            </td>
                            <td>
                              Enter Your Email ID *
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text"></input>
                            </td>
                            <td>
                              <input type="email"></input>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              Enter your Subject here *
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              <input type="text"></input>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              Enter your Message here *
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              <textarea type="textarea" rows="3"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              <button>Submit</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </td>
                <td>
                  <img src={contact}></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="map">
          <img src={map}></img>
        </div>
        <div className="helpus">
          <h2>We Need Your Support Today !</h2>
          <br></br>
          <button>Donate</button>
        </div>
      </div>
    );
  }
}
export default Contact
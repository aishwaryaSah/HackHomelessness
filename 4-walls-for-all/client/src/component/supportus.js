import React from 'react'
import "./supportus.css";
import support from "../media/images/support.png";
import donate from "../media/images/donate.png";

class SupportUs extends React.Component {
  
  render() {
    return (
      <div className="supportus">
        <div className="banner">
          <p>Support Us</p>
        </div>
        <div className="infotext">
          <h2>Get Involved</h2>
          <p>
          We will be really honoured to have you on-board with us. We are open to both 
          monetary and non-monetary forms of contributions. Check our Events details to find more.
          </p>
          <br></br>
          <button>Contributors</button>
        </div>
        <div className="imgArea support">
          <img src={support}></img>
        </div>
        <div className="infotext">
          <h2>Let's Make A Change</h2>
          <p>Here are some ways you can donate:</p>
        </div>
        <div className="imgArea donate">
          <img src={donate}></img>
        </div>
      </div>
    );
  }
}
export default SupportUs
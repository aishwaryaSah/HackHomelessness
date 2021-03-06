import React from 'react'
import "./aboutus.css";
import aboutbg from "../media/images/about_bg.png";
import mission from "../media/images/Mission.png";
import vision from "../media/images/Vision.png";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <div className="banner">
          <p>About</p>
        </div>
        <div className="infotext">
          <p>
          We are a non-profit organisation, and work on the sole of giving back to the society. 
          We believe in helping those who cannot help themselves.
          <br></br>
          We have a group of shelter homes associated with us, they help us accommodate all our residents. 
          <br></br>
          We try our best to increase the number of shelter homes and the number of beds available in proportion to the increasing number of residents.
          <br></br>
          We are different from normal shelter homes because - we believe in developing basic livelihood skills in our residents, 
          so that they can sustain themselves, also we encourage residents to take part in cooking and cleaning for the shelter homes.</p>
        </div>
        <div className="imgArea">
          <img src={aboutbg}></img>
        </div>
        <div className="quote">
          <p className="quote-text">We believe everyone is capable of sustaining and having their own 'homes' by themselves, it is just that they need a little support and motivation, and we are here for that support so that our residents can sustain themselves on their own, at some point of time.</p>
          {/* <p className="quote-author"> Charlotte Bronte, Jane Eyre</p> */}
        </div>
        <div className="values">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="valueText">
                    <h2>Our Mission</h2>
                    <p>"To make 4-Walls-For-All accessible to all, <br></br>and to help those who can’t help themselves<br></br>by providing a safe living and development space"</p>
                  </div>
                </td>
                <td>
                  <img src={mission}></img>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={vision}></img>
                </td>
                <td>
                  <div className="valueText">
                    <h2>Our Vision</h2>
                    <p>"To eradicate global homelessness"</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="helpus">
          <h2>We Need Your Support Today !</h2>
          <br></br>
          <a href="/supportus"><button>Donate</button></a>
        </div>
      </div>
    );
  }
}
export default AboutUs
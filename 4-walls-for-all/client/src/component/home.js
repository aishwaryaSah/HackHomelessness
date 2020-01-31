import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import NoHome from "../media/images/nohome.png";
import Human from "../media/images/human.png";
import Alert from "../media/images/alert.png";
import news1 from "../media/images/news1.png";
import news2 from "../media/images/news2.png";
import news3 from "../media/images/news3.png";
import Background from "../media/images/background.png";
import JoinUs from "../media/images/joinus.png";

import "./home.css";
class Home extends React.Component {
  getCard1(){
    return (
      <div className="flip-card one">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <br></br>
            <img src={NoHome}></img>
            <br></br>
            <br></br>
            What is homelessness?
            </div>
            <div className="flip-card-back">
            <br></br>
              <div className="quote">
                <span className="text-align">
                  <p>State of having no fixed, regular and adequate nighttime residence.</p>
                </span>
                <span className="right-align">
                  <p>- Oxford Encyclopaedia</p>
                </span>
              </div>
              <div className="quote">
                <span className="text-align">
                  <p>Homelessness is defined as living in a house that is below the minimum standard or lacks secure tenure.</p>
                </span>
                <span className="right-align">
                  <p>- Wikipedia</p>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
  }

  getCard2(){
    return (
      <div className="flip-card two">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <br></br>
            <img src={Human}></img>
            <br></br>
            <br></br>
              Who is affected?
            </div>
            <div className="flip-card-back">
              <ul>
                <li> CAN'T AFFORD HOUSING</li>
                <li>WORKING BUT IN POVERTY</li>
                <li>UNABLE TO FIND WORK</li>
                <li>PERSONAL HARDSHIP</li>
                <li>PHYSICALLY OR MENTALLY ILL</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

  getCard3(){
    return (
      <div className="flip-card three">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <br></br>
            <img src={Alert}></img>
            <br></br>
            <br></br>
            Spectrum of severity
            </div>
            <div className="flip-card-back">
              <div className="a">On the Streets</div>
              <div className="b">Abandoned Building/Vehicle</div>
              <div className="c">Shelters/Missions</div>
              <div className="d">Transitional Housing</div>
              <div className="e">Single Room Occupancy (SRO)</div>
              <div className="f">Precariously "Doubled Up"</div>
              <div className="g">2+ Moves within 60 Days</div>
            </div>
          </div>
        </div>
    );
  }

  getContriPeople(){
    return (
      <ul>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <li>Aishwarya Sah</li>
        <a href="contributions">Read More</a>
      </ul>
    );
  }

  getNewsCard1(){
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={news1} />
        <Card.Body>
          <Card.Title>Stiching Seminar</Card.Title>
          <Card.Text>
            More tahn 100 people were trained in the stiching craft by 4-Walls-For-All.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    );
  }

  getNewsCard2(){
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={news2} />
        <Card.Body>
          <Card.Title>Public Speaking Session</Card.Title>
          <Card.Text>
            TechCrunch organised an event to spread awareness of proper speaking and manners.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    );
  }
  getNewsCard3(){
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={news3} />
        <Card.Body>
          <Card.Title>Best Childcare Practices</Card.Title>
          <Card.Text>
            4-Walls-For-All in association with Google organised an event to team and ...
            {/* distribute materials to ... */}
            {/* take care of their new born children.. */}
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    );
  }
  render() {
    return (
      <div className="homepage">

        <div className="parallax">
          <div className="con">
            <div className="transbox">
              <h1>4 WALLS FOR ALL</h1>
            </div>
          </div>
        </div>  

        <div className="why">
          {this.getCard1()}
          {this.getCard2()}
          {this.getCard3()}
        </div>

        <div className="latestNews">
          <h1>Latest News</h1>
          <br></br>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                {this.getNewsCard1()}
              </Col>
              <Col xs={6} md={4}>
                {this.getNewsCard2()}
              </Col>
              <Col xs={6} md={4}>
                {this.getNewsCard3()}
              </Col>
            </Row>
          </Container>
        </div>

        <div className="quote">
          <Carousel controls="true" fade="true" indicators="false">
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">Homelessness is a mark of failure for communities in providing basic security. </p>
                <p className="quote-author">HaclerEarth</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Background}
                alt="Happy Children"
              />
              <Carousel.Caption>
                <p className="quote-text">State of having no fixed, regular and adequate nighttime residence. </p>
                <p className="quote-author">Oxford Encyclopaedia</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">Homelessness is defined as living in a house that is below the minimum standard or lacks secure tenure. </p>
                <p className="quote-author"> Wikipedia</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">The issue of modern homelessness is broad and complex, affecting too many of our neighbors and communities.</p>
                {/* <p className="quote-author"> Charlotte Bronte, Jane Eyre</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">Homelessness can happen to anyone. Homelessness does not define a person but is instead a temporary situation.  </p>
                {/* <p className="quote-author"> Charlotte Bronte, Jane Eyre</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* <span className="quote-text">
            <p>I am no bird; and no net ensnares me; I am a free human being with an independent will.</p>
          </span>
          <span className="quote-author">
            <p>Charlotte Bronte, Jane Eyre</p>
          </span> */}
        </div>

        <div className="upcomming">
          <h1>Upcomming Events</h1>
          <br></br>
          <div className="EventList">
            <Table striped bordered hover>
            {/* variant="dark" */}
              <tbody>
                <tr>
                  <td> 
                    <div className="eventTitle">
                      <h4>Flash Mob for 4 Walls For All Awarness</h4>
                      At MG Road, Bangalore
                    </div>
                  </td>
                  <td>
                    <div className="eventDate">
                      16 Feb,2020
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> 
                    <div className="eventTitle">
                      <h4>Flash Mob for 4 Walls For All Awarness</h4>
                      At MG Road, Bangalore
                    </div>
                  </td>
                  <td>
                    <div className="eventDate">
                      16 Feb,2020
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> 
                    <div className="eventTitle">
                      <h4>Flash Mob for 4 Walls For All Awarness</h4>
                      At MG Road, Bangalore
                    </div>
                  </td>
                  <td>
                    <div className="eventDate">
                      16 Feb,2020
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> 
                    <div className="eventTitle">
                      <h4>Flash Mob for 4 Walls For All Awarness</h4>
                      At MG Road, Bangalore
                    </div>
                  </td>
                  <td>
                    <div className="eventDate">
                      16 Feb,2020
                    </div>
                  </td>
                </tr>
                <tr>
                  <td> 
                    <div className="eventTitle">
                      <h4>Flash Mob for 4 Walls For All Awarness</h4>
                      At MG Road, Bangalore
                    </div>
                  </td>
                  <td>
                    <div className="eventDate">
                      16 Feb,2020
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="joinUs">
          <div className="text">
            <h1>Join Us</h1>
            <br></br>
            <h3>Let's Create<br></br>A better and Happy World <br></br> Together</h3>
            <br></br>
            <button>Support Us</button>
          </div>
          <img src={JoinUs}></img>
        </div>
      </div>
    );
  }
}
export default Home
import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Table from "react-bootstrap/Table";
import NoHome from "../media/images/nohome.png";
import Human from "../media/images/human.jpg";
import news from "../media/images/parallaximg.jpg";
import Background from "../media/images/background.png";

import "./home.css";
class Home extends React.Component {
  getCard1(){
    return (
      <div className="flip-card one">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <br></br><br></br>
            What is homelessness?
            <br></br>
                <img src={NoHome}></img>
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
            <br></br>
              Who is affected?
              <br></br>
            <img src={Human}></img>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1> 
              <p>Architect & Engineer</p> 
              <p>We love that guy</p>
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
            <br></br>
              Spectrum of severity
              <br></br>
            <img src={NoHome}></img>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1> 
              <p>Architect & Engineer</p> 
              <p>We love that guy</p>
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
        <Card.Img variant="top" src={news} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
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
                {this.getNewsCard1()}
              </Col>
              <Col xs={6} md={4}>
                {this.getNewsCard1()}
              </Col>
            </Row>
          </Container>
        </div>

        <div className="quote">
          <Carousel controls="true" fade="true" indicators="false">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Background}
                alt="Happy Children"
              />
              <Carousel.Caption>
                <p className="quote-text">I am no bird; and no net ensnares me; I am a free human being with an independent will. </p>
                <p className="quote-author"> Charlotte Bronte, Jane Eyre</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">I am no bird; and no net ensnares me; I am a free human being with an independent will. </p>
                <p className="quote-author"> Charlotte Bronte, Jane Eyre</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">I am no bird; and no net ensnares me; I am a free human being with an independent will. </p>
                <p className="quote-author"> Charlotte Bronte, Jane Eyre</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">I am no bird; and no net ensnares me; I am a free human being with an independent will. </p>
                <p className="quote-author"> Charlotte Bronte, Jane Eyre</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <p className="quote-text">I am no bird; and no net ensnares me; I am a free human being with an independent will. </p>
                <p className="quote-author"> Charlotte Bronte, Jane Eyre</p>
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
          <img src={news}></img>
        </div>
      </div>
    );
  }
}
export default Home
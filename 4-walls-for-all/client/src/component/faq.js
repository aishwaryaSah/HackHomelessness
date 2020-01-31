import React from 'react'
import {Accordion, Card, Button} from "react-bootstrap";
import "./faq.css";

class Faq extends React.Component {
  
  render() {
    return (
      <div className="faq">
        <h2>Kindly check your questions here. <br></br><br></br>If you would like to know anuthing else, Go to <a href="/contactus">Contact Us</a></h2><br></br><br></br>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
              At times there is a shortage of shelter homes. Especially during winters. How will that be solved?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Any person willing to lend some space in their residence can do so in the following way:
                <ul>
                  <li>Signup to our portal as a  user.</li>
                  <li>Go to the register property section and fill in the registration form where you will be asked to enter to enter the extra amenities like Blankets or pillows that would require.</li>
                  <li>Post registration, we will have a Security team visit your property and check the occupancy, safety and hygiene.</li>
                  <li>If everything seems fine, the property will be listed as a viable shelter home.</li>
                  <li>All the extra amenities that the property had requested for would then be raised in the Wanted section.  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
              How does a homeless person go about finding these shelter homes.
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>Pamphlets with details of nearest shelter home’s locations would be put up on every corner’s and distributed so that the shelter homes are reachable easily by everyone.</li>
                  <li>During health checkup’s, CSR events and other activities the details of the nearest shelter homes would be actively voiced.</li>
                  <li>Our page also has a Find nearest Shelter home location option in which you get the required details upon upon entering the Pin-code. Using this feature anyone and everyone would be able to guide them to us.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
              What if I see a homeless person and want to report it? What if medical attention is needed by a homeless person?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>
                  <li>Our home page has a Report Button which gives you the option to report a homeless person’s location or a medical emergency for them.</li>
                  <li>If a homeless person’s location is reported, our Security Team would be instructed to help them as soon as possible.</li>
                  <li>f a medical attention is reported, our Medical Team will reach there as soon as possible.</li>
                  <li>In case of a medical emergency, you are advised to directly contact the Hospital first. You can find the details in the Report page as well.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
              What if a homeless shelter is completely occupied?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ul>
                  <li>On reaching to that homeless shelter, you will be asked how many beds would you be requiring (We try to keep the families together).</li>
                  <li>Then we will enter that into our portal, and it will give us the location of the nearest shelter home with that much occupancy. And we would reserve it for you so that by the time you go, it doesn’t fill up.</li>
                  <li>If you wish to walk up to that place, we will give you a printed map if the direction in which you need to proceed. Or if walking is nor possible, someone fron the transportation team will help you reach there.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
              What if a homeless person needs medical help?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <ul>
                  <li>Our home page has a Report Button which gives you the option to report a homeless person’s location or a medical emergency for them.</li>
                  <li>If a homeless person’s location is reported, our Security Team would be instructed to help them as soon as possible.</li>
                  <li>If a medical emergency is reported, our Medical Team will reach there as soon as possible.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
              How can I help of Homeless People monetarily ?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <ul>
                  <li>In the Donate section, you can go and donate the amount via net banking , debit and credit cards or the wallet’s available.</li>
                  <li>NEFT/ Check details can be found at the Donate Section as well.</li>
                  <li>You can go to any of the Wallet (Paytm, Gpay, Amazon Pay, etc.)’s profile section and there will be a box called Donor At 4-Wall-For-All which you can check. This will prompt the wallet while you are paying for anything to always round off the money to a greater multiple of 5. And donating the extra pennies to our Organization. </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="6">
              What if I want to buy some amenities or already have some amenities and would like to donate?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <ul>
                  <li>Post login, you can go to the Wanted section . There which ever product you wish to donate, you can select donate.</li>
                  <li>You will have to give us the expected date by which you would be able to deliver it to us and if you would require someone to pick it us or would like to self deliver it to our office. Details accordingly would be displayed.</li>
                  <li>Food items are always welcomed. In the wanted section, the food option is always open. Leftovers or raw materials can be donated to us.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="7">
              What if I want to be a volunteer?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <ul>
                  <li>You can come down to our office or contact us by means mentioned in the Contact Us page.</li>
                  <li>
                    <ul>
                      <li>We usually need help with</li>
                      <li>Buying the items mentioned on the Wanted Page.</li>
                      <li>Cooking the food at our shelter homes.</li>
                      <li>Helping register the homeless people.</li>
                      <li>Help in training the homeless people.</li>
                      <li>Security team for checking the properties. (You will be accompanied by an experienced member of our team).</li>
                      <li>Medical team for helping while treating the homeless people. (You will be accompanied by an experienced member of our medical team).</li>
                    </ul>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>


        </Accordion>
      </div>
    );
  }
}
export default Faq
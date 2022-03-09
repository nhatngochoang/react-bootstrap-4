
import React from 'react';


import { Button, Card, CardGroup, ListGroup, Nav, Row, Col } from 'react-bootstrap';

const image1 = require('../assets/images/Sz1.jpg')
const image2 = require('../assets/images/Mt1.jpg')
const image3 = require('../assets/images/overlay.jpg')
const image4 = require('../assets/images/Mt2.jpg')
const image5 = require('../assets/images/Mt3.jpg')
const image6 = require('../assets/images/Mt4.jpg')
const image7 = require('../assets/images/Mt5.jpg')
const image8 = require('../assets/images/Mt6.jpg')
const image9 = require('../assets/images/Mt7.jpg')
const image10 = require('../assets/images/Mt8.jpg')


const cardNavArr = ['tabs', 'pills']
const cardGroupArr = [image4, image5, image6]
const cardGridArr = [image7, image8, image9, image10]




export default function CardComponent() {

   return (
      <div className="container">
         <a href="https://www.niemvuilaptrinh.com/article/Bootstrap-4-Phan-4">Bootstrap-4</a>
         <h4>React-Bootstrap-5 Card Component</h4>
         <a href="https://react-bootstrap.github.io/components/cards/">Bootstrap-5</a>
         <div className="row">
            <div className="col">
               <Card style={{ width: '18rem' }}>
                  <Card.Header
                     as="h5"
                  >Card.Header</Card.Header>
                  <Card.Img variant="top" src={image1} />
                  <Card.Body>
                     <Card.Title>Card.Title</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted">Card.Subtitle</Card.Subtitle>
                     <Card.Text>
                        Card Text - Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </Card.Text>
                     <Button variant="primary">Button</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">Card.Footer</Card.Footer>
               </Card>
            </div>
            <div className="col">
               <Card style={{ width: '18rem' }}>
                  <Card.Body>
                     <Card.Link href="#">Card.Link</Card.Link>
                     <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                  <ListGroup variant="flush">
                     <ListGroup.Item>ListGroup.Item</ListGroup.Item>
                     <ListGroup.Item>ListGroup.Item</ListGroup.Item>
                     <ListGroup.Item>ListGroup.Item</ListGroup.Item>
                  </ListGroup>
               </Card>
            </div>
            <div className="col">
               <Card style={{ width: '18rem' }}>
                  <Card.Header>ListGroup</Card.Header>
                  <ListGroup variant="flush">
                     <ListGroup.Item>Cras justo odio</ListGroup.Item>
                     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                  </ListGroup>
               </Card>
            </div>
         </div>
         <div className="row" style={{ marginTop: '30px' }}>
            <div className="col">
               <Card>
                  <Card.Header>Quote</Card.Header>
                  <Card.Body>
                     <blockquote className="blockquote mb-0">
                        <p>
                           {' '}
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                           erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                           Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                     </blockquote>
                  </Card.Body>
               </Card>
            </div>
            <div className="col">
               <Card>
                  <Card.Img variant="top" src={image2} />
                  <Card.Body>
                     <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                     </Card.Text>
                  </Card.Body>
               </Card>

            </div>
            <div className="col">
               <Card className="bg-dark text-white">
                  <Card.Img src={image3} alt="Card image" />
                  <Card.ImgOverlay>
                     <Card.Title>Card title</Card.Title>
                     <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                     </Card.Text>
                     <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
               </Card>
            </div>
         </div>
         <div className="row" style={{ marginTop: '30px' }}>
            {
               cardNavArr.map((item, idx) => {
                  return (
                     <div className="col" key={idx}>
                        <Card>
                           <Card.Header>
                              <Nav
                                 variant={item}
                                 defaultActiveKey="#first">
                                 <Nav.Item>
                                    <Nav.Link href="#first">Active</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Nav.Link href="#disabled" disabled>
                                       Disabled
                                    </Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </Card.Header>
                           <Card.Body>
                              <Card.Title>Special title treatment</Card.Title>
                              <Card.Text>
                                 With supporting text below as a natural lead-in to additional content.
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                           </Card.Body>
                        </Card>
                     </div>
                  )
               })
            }

         </div>
         <h5 style={{ marginTop: '30px' }}>Card Group === .row &gt;.col</h5>
         <CardGroup>
            {cardGroupArr.map((cardImg, cardIdx) => {
               return (
                  <Card key={cardIdx}>
                     <Card.Img
                        variant="top"
                        src={cardImg}
                        style={{ height: '323px', width: '100%', display: 'block' }} />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This is a wider card with supporting text below as a natural lead-in to
                           additional content. This card has even longer content than the first to
                           show that equal height action.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                     </Card.Footer>
                  </Card>
               )
            })}
         </CardGroup>
         <h5 style={{ marginTop: '30px' }}>Card with GridSystem</h5>
         <Row xs={1} md={2} xl={3} className="g-4">
            {cardGridArr.map((item, idx) => (
               <Col key={idx}>
                  <Card>
                     <Card.Img variant="top" src={item} />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This is a longer card with supporting text below as a natural
                           lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      </div >
   );
}
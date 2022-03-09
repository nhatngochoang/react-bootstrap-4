
import React from 'react';
import { Badge, Col, ListGroup, Row, Tab } from 'react-bootstrap';

export default function ListGroupComponent() {

   return (
      <div className="container">
         <a href="https://www.niemvuilaptrinh.com/article/Bootstrap-4-Phan-6">Bootstrap-4</a>
         <h4>React-Bootstrap-5 List-Group Component</h4>
         <a href="https://react-bootstrap.github.io/components/list-group/">Bootstrap-5</a>

         <div className="row">
            <div className="col" >
               <ListGroup as="ul" style={{ width: '18rem', cursor: "pointer" }}>
                  <ListGroup.Item as="li" active>
                     Active
                  </ListGroup.Item>
                  <ListGroup.Item

                  >Normal</ListGroup.Item>
                  <ListGroup.Item as="li" disabled>
                     Disabled
                  </ListGroup.Item>
               </ListGroup>
            </div>
            <div className="col">
               <ul>
                  <li>action ➙ action có href là a, k có là button, hoặc dùng as để xác định </li>
               </ul>
               <ListGroup as="ul" style={{ width: '18rem', cursor: "pointer" }}>
                  <ListGroup.Item
                     action href="https://www.google.com/" target="_blank">
                     Link
                  </ListGroup.Item>
                  <ListGroup.Item
                     action onClick={() => alert('Button with action, no href specified')}
                  >Button</ListGroup.Item>
                  <ListGroup.Item disabled>
                     Disabled
                  </ListGroup.Item>
               </ListGroup>
            </div>
            <div className="col">
               <ListGroup
                  variant="flush"
                  as="ol"
                  numbered
               >
                  <ListGroup.Item as="li">li 1</ListGroup.Item>
                  <ListGroup.Item as="li">li 2</ListGroup.Item>
                  <ListGroup.Item as="li">li 3</ListGroup.Item>
               </ListGroup>
            </div>
         </div>
         <div className="row" style={{ marginTop: '30px' }}>
            <div className="col">
               <ListGroup as="ol" numbered style={{ width: '18rem', cursor: "pointer" }}>
                  <ListGroup.Item
                     as="li"
                     className="d-flex justify-content-between align-items-start"
                  >
                     <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                     </div>
                     <Badge variant="primary" pill>
                        14
                     </Badge>
                  </ListGroup.Item>
               </ListGroup>
            </div>
            <div className="col">
               <ListGroup
                  horizontal>
                  <ListGroup.Item>This</ListGroup.Item>
                  <ListGroup.Item>ListGroup</ListGroup.Item>
                  <ListGroup.Item>renders</ListGroup.Item>
                  <ListGroup.Item>horizontally!</ListGroup.Item>
               </ListGroup>
            </div>
            <div className="col">
               <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                  <Row>
                     <Col sm={4}>
                        <ListGroup>
                           <ListGroup.Item action href="#link1">
                              Link 1
                           </ListGroup.Item>
                           <ListGroup.Item action href="#link2">
                              Link 2
                           </ListGroup.Item>
                        </ListGroup>
                     </Col>
                     <Col sm={8}>
                        <Tab.Content>
                           <Tab.Pane eventKey="#link1">
                              <p>When I consider every thing that grows Holds in perfection but a little moment, That this huge stage presenteth nought but shows Whereon the stars in secret influence comment; When I perceive that men as plants increase, Cheered and checked even by the self-same sky, Vaunt in their youthful sap, at height decrease, And wear their brave state out of memory; Then the conceit of this inconstant stay Sets you most rich in youth before my sight,</p>
                           </Tab.Pane>
                           <Tab.Pane eventKey="#link2">
                              <p>Thus can my love excuse the slow offence Of my dull bearer when from thee I speed: From where thou art why should I haste me thence? Till I return, of posting is no need. O! what excuse will my poor beast then find, When swift extremity can seem but slow? Then should I spur, though mounted on the wind, In winged speed no motion shall I know, Then can no horse with my desire keep pace; Therefore desire, of perfect'st love being made,</p>
                           </Tab.Pane>
                        </Tab.Content>
                     </Col>
                  </Row>
               </Tab.Container>
            </div>
         </div>
      </div >
   );
}
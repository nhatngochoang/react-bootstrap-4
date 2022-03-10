import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { PopOverComponent } from "./PopOverComponent.jsx";

function FormComponent() {
   const [show, setShow] = useState(false);

   const [radio, setRadio] = useState(undefined); // dantruyền ID mặc định ở đây
   console.log("RadioID: " + radio);

   useEffect(() => {
      if (radio === "2") {
         setShow(true);
      } else {
         setShow(false);
      }
   }, [radio]);

   return (
      <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formDateBirth">
            <Form.Label>
               <span className="text-muted fs-7">Date of birth</span>
               <PopOverComponent />
            </Form.Label>
            <div className="row">
               <div className="col">
                  <Form.Select>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                  </Form.Select>
               </div>
               <div className="col">
                  <Form.Select>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                  </Form.Select>
               </div>
               <div className="col">
                  <Form.Select>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                  </Form.Select>
               </div>
            </div>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formGender">
            <Form.Label>
               Gender
               <FontAwesomeIcon icon={faCircleQuestion} />
            </Form.Label>
            {["checkbox", "radio"].map((type, typeidx) => {
               return (
                  <div className="row" key={typeidx}>
                     <div className="col">
                        <Form.Check
                           inline
                           label="1"
                           name="group1"
                           type={type}
                           id={`inline-${type}-1`}
                           onChange={type === "radio" ? () => setRadio(`1`) : () => {}}
                        />
                     </div>
                     <div className="col">
                        <Form.Check
                           inline
                           label="2"
                           name="group1"
                           type={type}
                           id={`inline-${type}-2`}
                           onChange={type === "radio" ? () => setRadio(`2`) : () => {}}
                        />
                     </div>
                     <div className="col">
                        <Form.Check
                           inline
                           disabled
                           label="3 (disabled)"
                           type={type}
                           id={`inline-${type}-3`}
                        />
                     </div>
                  </div>
               );
            })}
            {show && (
               <div id="genderSelect">
                  <select className="form-select">
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
                  <div className="my-3">
                     <span className="text-muted fs-7">Your pronoun is visible to everyone.</span>
                     <input type="text" className="form-control" placeholder="Gender (optional)" />
                  </div>
               </div>
            )}
         </Form.Group>
      </Form>
   );
}

export default FormComponent;

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormComponent from "./FormComponent.jsx";

export default function ModalExample() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <>
         <div className="text-center">
            <Button variant="success" onClick={handleShow}>
               Create New Account
            </Button>
         </div>

         <Modal centered show={show} onHide={handleClose}>
            <Modal.Header className="d-flex flex-row justify-content-start align-items-center">
               <div>
                  <Modal.Title as="h2">Sign Up</Modal.Title>
                  <p className="text-muted fs-7">It's quick and easy.</p>
               </div>
               <button type="button" className="btn-close" onClick={handleClose}></button>
            </Modal.Header>
            <Modal.Body>
               <FormComponent />
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
               <p className="fs-7">By clicking Sign Up, you agree to our Terms, Data Policy....</p>
               <Button variant="success" onClick={handleClose} size="lg">
                  Sign Up
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

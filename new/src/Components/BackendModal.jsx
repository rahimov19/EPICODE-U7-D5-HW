import { React, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
export default function BackendModal2() {
  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="dark" id="order" onClick={handleShow2}>
        Order A Movie
      </Button>

      <Modal show={show} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>How Many Movies do you want to order?</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter A Movie Name</Form.Label>
                <Form.Control as="textarea" rows={1} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Additional Information About Movie</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              alert("Your Request has been sent!");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

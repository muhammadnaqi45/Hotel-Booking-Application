import React from "react";
import { useState } from "react";
import "./Rooms.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const Rooms = ({ room, fromDate, toDate }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <Card className="mt-5">
        <div className="row">
          <div className="col-md-5">
            <Card.Img variant="top" src={room.imageurls} />
          </div>
          <div className="col-md-6">
            <Card.Body>
              <Card.Title>
                <b>{room.name}</b>
              </Card.Title>
              <Card.Text>
                <b>Max Count:</b> {room.maxcount}
              </Card.Text>
              <Card.Text>
                <b>Phone Number:</b> {room.phoneNumber}
              </Card.Text>
              <Card.Text>
                <b>Type:</b> {room.type}
              </Card.Text>
              <div className="d-flex justify-content-end">
                {fromDate && toDate && (
                  <Link
                    to={`/book/${room._id}/${fromDate}/${toDate}`}
                    variant="primary"
                    className="btn btn-primary m-2"
                  >
                    Book Now
                  </Link>
                )}

                <Button variant="primary" onClick={handleShow} className="m-2">
                  View Details
                </Button>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>{room.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100" src={url} alt="First slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>{room.description}</Modal.Footer>
      </Modal>
    </div>
  );
};

export default Rooms;

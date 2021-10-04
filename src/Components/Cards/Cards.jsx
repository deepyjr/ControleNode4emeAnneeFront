import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./Card.css";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className="cardUnit">
      <Card style={{ width: "18rem", height: "22rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Crée en : {props.publishedYear} <br />
            Par : {props.editor} <br />
            <Badge bg="primary">{props.type}</Badge>
          </Card.Text>
          <div className="containerButton">
            <Link to={"/edit/" + props.id}>
              <Button className="firstBtn" variant="primary">
                Edit
              </Button>
            </Link>
            <Link to={"/delete/" + props.id}>
              <Button variant="danger">Delete</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;

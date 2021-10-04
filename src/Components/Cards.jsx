import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Cards(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Crée le : {props.publishedYear}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;

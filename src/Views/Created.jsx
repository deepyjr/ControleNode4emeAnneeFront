import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Created(props) {
  return (
    <div>
      <div className="containerGlobalDeleted">
        <div className="containerDeleted">
          <Card body>
            <p>Voiture bien crée !</p>
            <Link to={"/"}>
              <Button className="firstBtn" variant="primary">
                Retourner sur la page
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Created;

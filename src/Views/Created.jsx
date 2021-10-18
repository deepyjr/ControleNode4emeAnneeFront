import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
function Created(props) {
  let { type } = useParams();
  const [body, setBody] = React.useState();
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    const setContent = () => {
      console.log(type);
      if (type === "car") {
        setBody(
          <div>
            <div className="containerGlobalDeleted">
              <div className="containerDeleted">
                <Card body>
                  <p>Voiture bien créée !</p>
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
      } else if (type === "driver") {
        setBody(
          <div>
            <div className="containerGlobalDeleted">
              <div className="containerDeleted">
                <Card body>
                  <p>Conducteur bien créé !</p>
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
    };
    if (load) {
      setContent();
      setLoad(false);
    }
  }, [load]);

  return <div>{body}</div>;
}

export default Created;

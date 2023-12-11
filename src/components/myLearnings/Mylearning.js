import React from "react";
import "./mylearningsstyle.css";
import namastereact from "../../images/Certificates/namstereactcert.jpg";
import reactlco from "../../images/Certificates/react-lco.jpg";
import backendlco from "../../images/Certificates/backend-lco.jpg";
import { Carousel, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Mylearning() {
  return (
    <div className="learingnew">
      <div className="learning">
        <Carousel variant="dark">
          <Carousel.Item>
            <Image
              className="img-center"
              width="50%"
              height="50%"
              src={namastereact}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="img-center"
              width="50%"
              height="50%"
              src={reactlco}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid
              className="img-center"
              width="50%"
              height="50%"
              src={backendlco}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Mylearning;

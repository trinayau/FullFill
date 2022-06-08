import React from "react";
import { Col, Row } from "react-bootstrap";

const Homepage = () => {
  return (
    <div className="App">
  
      <div className="Container-1-homepage">
        <Row >
          <Col xl={6}><div className="container-1-text">
            <h1>Help your community stay full with FullFill.</h1>
            <br />
            <p>
              Donate surplus food to UK charities, organise in local communities
              to support those who can’t easily access services, and volunteer to
              help food banks keep doing their vital work.
            </p>
            <br />
           
            <button className="locateBtn">Locate a Food Bank</button>
            <br/>
          </div>
          </Col>

          <Col xl={6}> <div className="container-1-text">

         
            <img role='homePageImg' className="img-fluid"
              src="https://images.pexels.com/photos/6995215/pexels-photo-6995215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
              </div>
              </Col>
              </Row>
      </div>
<br/>
<br/>
    </div>
  );
};

export default Homepage; 

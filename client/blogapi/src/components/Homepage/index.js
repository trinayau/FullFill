import React from "react";
import { Col, Row, Container,Card,CardGroup,Button } from "react-bootstrap";

const Homepage = () => {
  return (
    <div className="App">
      {/* <div className="flex">
        {" "}
        <div className="container-one">
          <h1>Help your community stay full with FullFill.</h1>
          <br />
          <p>
            Donate surplus food to UK charities, organise in local communities
            to support those who can’t easily access services, and volunteer to
            help food banks keep doing their vital work.
          </p>
          <br />
          <br />
          <button>Locate a Food Bank</button>
        </div>
        <div className="container-two">
          <img
            src="https://images.pexels.com/photos/6995215/pexels-photo-6995215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="woman-packing"
          />
        </div>
      </div> */}
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
         
          <Col xl={4}><div className="container-1-home">
            <img
              src="https://images.pexels.com/photos/6995215/pexels-photo-6995215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="woman-packing"
            />
          </div></Col>
        </Row>
      </div>
<br/>
<br/>

{/* first cards */}
<div className ="container-c">
  <div className="container-2-h2">
  <h2>Top Requests</h2> <br/>
  </div>
<Row xs={1} md={2} className="g-3">

    <Col>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/uncooked-white-longgrain-rice-background-picture-id1069180776?k=20&m=1069180776&s=612x612&w=0&h=LBnQVWSsP9QM6r0_d7sW1_7laiNfnhbyX2hBHpyxEYE=" />
        <Card.Body>
          <Card.Title><strong>Rice</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
   
    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1598720290281-9f26ae6d6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <Card.Body>
          <Card.Title><strong>Pasta</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/large-assortment-of-canned-foods-picture-id459253901?k=20&m=459253901&s=612x612&w=0&h=As2vGi4tEehLi1cCxIgxJSJRggIETJleL-vwiJ39-GA=" />
        <Card.Body>
          <Card.Title><strong>Tinned Food</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/corn-flaked-breakfast-picture-id1329625530?k=20&m=1329625530&s=612x612&w=0&h=dNkdJ9Qxqn_uKLcbHSygoQX3EYSg9ut_aTsxWjJC6eU=" />
        <Card.Body>
          <Card.Title><strong>Cereal</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
</Row>  
</div>
<br/>
<br/>

{/* second cards */}
<div className ="cards">
  <h2>Featured communities</h2> <br/>
<Row xs={1} md={2} className="g-3">
    <Col>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/uncooked-white-longgrain-rice-background-picture-id1069180776?k=20&m=1069180776&s=612x612&w=0&h=LBnQVWSsP9QM6r0_d7sW1_7laiNfnhbyX2hBHpyxEYE=" />
        <Card.Body>
          <Card.Title><strong>Colindale Foodbank 
Volunteers</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1598720290281-9f26ae6d6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <Card.Body>
          <Card.Title><strong>Colindale Foodbank 
Volunteers</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/large-assortment-of-canned-foods-picture-id459253901?k=20&m=459253901&s=612x612&w=0&h=As2vGi4tEehLi1cCxIgxJSJRggIETJleL-vwiJ39-GA=" />
        <Card.Body>
          <Card.Title><strong>Colindale Foodbank 
Volunteers</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/corn-flaked-breakfast-picture-id1329625530?k=20&m=1329625530&s=612x612&w=0&h=dNkdJ9Qxqn_uKLcbHSygoQX3EYSg9ut_aTsxWjJC6eU=" />
        <Card.Body>
          <Card.Title><strong>Colindale Foodbank 
Volunteers</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
</Row>  
</div>

<br/>
<br/>

 {/* third card  */}
{/* <Card style={{ width: '100rem' }}>
  <Row className='card3'>
  <Col md={5} lg={6}  >
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1604344865130-b8c0c7f6c9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmUlMjBtYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
  </Col>
  <Col>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button >Go somewhere</Button>
  </Card.Body>
  </Col>
  </Row>
</Card>  */}
<br/>
<br/>
<div className="Container-1">
        <Row >
          <Col sm={6}><div className="container-three">
            
          <img src="https://images.unsplash.com/photo-1604344865130-b8c0c7f6c9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmUlMjBtYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" 
           alt="image of a person looking at navigations"/>
          </div></Col>
          <Col sm={6}><div className="container-four">
          <h2>We want to build the UK’s most comprehensive Food Bank map.<br/><br/>
Can you help us?</h2>
            <button>Locate a Food Bank</button>
          </div></Col>
        </Row>
      </div>
<br/>
<br/>
    </div>
  );
};

export default Homepage; 
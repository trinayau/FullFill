import React from "react";
import { Col, Row, Container,Card,CardGroup,Button } from "react-bootstrap";
import yellow  from "../Images/yellow.jpg";
import green  from "../Images/green.jpg";
import orange  from "../Images/orange.jpg";
import pink from "../Images/pink.jpg";
import nav from "../Images/nav.jpg";
import bowl from "../Images/bowl.jpg";
const Homecards = () => {
  return (
    <div className="App">

{/* first cards */}
<div className ="container-card">
  <div className="cards">
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
   
    <Col >
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
<div className="cardsone">
<div className ="container-card">
  <div className="cards">
  <h2>Featured Communities</h2> <br/>
  </div>
<Row xs={1} md={2} className="g-3">

    <Col>
      <Card className="card1">
        <Card.Img variant="top" src={yellow} />
        <Card.Body>
          <Card.Title><strong>Colindale <br/> Foodbank <br/>
Volunteers</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
   
    <Col className="card2" >
      <Card className="card2">
        <Card.Img variant="top" src={green} />
        <Card.Body>
          <Card.Title><strong>Balham<br/> Food<br/> Consortium 
</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    
    

    <Col className="card3" >
      <Card>
        <Card.Img variant="top" src={pink} />
        <Card.Body>
          <Card.Title><strong>Southwark<br/> Foodbank <br/>
Volunteer</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col className="card4" >
      <Card>
        <Card.Img variant="top" src={orange} />
        <Card.Body>
          <Card.Title><strong>King's Cross<br/> Soup <br/>Kitchen</strong></Card.Title>
        </Card.Body>
      </Card>
    </Col>
</Row>  
</div>
</div>
<br/>
<br/>


 {/* third card  */}
{/* <Card style={{ width: '500px' }}>
  <Row className='card3'>
  <Col xl={5} lg={4}  >
  <Card.Img className='card12' variant="top" src="https://images.unsplash.com/photo-1604344865130-b8c0c7f6c9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmUlMjBtYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
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

<div className="Container-card3">
        <Row >
          <Col xl={6}><div className="container-card3-1">
            
          <img src={nav} 
           alt="image of a person looking at navigations"/>
          </div></Col>
          <Col xl={6}><div className="container-card3-2">
          <h2>We want to build the UK’s most comprehensive Food Bank map.<br/><br/>
Can you help us?</h2>
            <button >Join the community</button>
          </div></Col>
        </Row>
      </div>
<br/>
<br/>
<div className="Container-card3">
    <br/>
    <br/>
        <Row >
            <br/>
            <br/>
            <br/>

          <Col xl={8}><div className="container-card4-1">
              <h5>Our mission:</h5>
              <br/>
          <h2>Connecting people in communities <br/>
through technology to reduce 
<br/>
food poverty in the UK.</h2>
</div>   
            </Col>
          <Col xl={4}><div className="container-card4-2">
          <img src={bowl} alt="fruit bowl"/>
          </div></Col>
        </Row>
      </div>

<br/>
<br/>
<Card className='card3'style={{ width: '100%' }}>
  <Row>
  <Col xl={12} lg={12}  >
  <Card.Body>
    <Card.Text>
    <h1>Are you a corporation<br/> who wants to donate surplus food?</h1>
    </Card.Text>
    <Button >Join the Corporate Community</Button>
  </Card.Body>
  </Col>
  </Row>
</Card>  






    </div>
    
    
  );
};

export default Homecards; 



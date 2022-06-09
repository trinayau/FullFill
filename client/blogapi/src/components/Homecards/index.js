import React from "react";
import { Col, Row, Container,Card,CardGroup,Button } from "react-bootstrap";
import yellow  from "../Images/yellow.jpg";
import green  from "../Images/green.jpg";
import orange  from "../Images/orange.jpg";
import pink from "../Images/pink.jpg";
import nav from "../Images/nav.jpg";
import salad from "../Images/salad.svg";
const Homecards = () => {
  return (
    <div className="App">


  <h2>Top Requests</h2> <br/>
  <div className="container">
      <div className="row">
    <div className="col-sm" style={{maxHeight:"150px"}}>
      <Card style={{backgroundColor:"var(--background)"}} >
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/uncooked-white-longgrain-rice-background-picture-id1069180776?k=20&m=1069180776&s=612x612&w=0&h=LBnQVWSsP9QM6r0_d7sW1_7laiNfnhbyX2hBHpyxEYE=" />
        <Card.Body>
          <Card.Title><strong>Rice</strong></Card.Title>
        </Card.Body>
      </Card>
   </div>
   <div className="col-sm">
      <Card style={{backgroundColor:"var(--background)"}}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1598720290281-9f26ae6d6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <Card.Body>
          <Card.Title><strong>Pasta</strong></Card.Title>
        </Card.Body>
      </Card>
      </div>
   <div class="col-sm">
    
      <Card style={{backgroundColor:"var(--background)"}}>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/vegetables-in-cans-picture-id151572910?b=1&k=20&m=151572910&s=170667a&w=0&h=nKEiE38BTdKI0OFmgxrxRD_JQVj1RsDQJr3bxFmO7WA=" />
        <Card.Body>
          <Card.Title><strong>Tinned Food</strong></Card.Title>
        </Card.Body>
      </Card>
      </div>
   <div class="col-sm">
      <Card style={{backgroundColor:"var(--background)"}}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1591623657169-a09670423dea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNlcmVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
        <Card.Body>
          <Card.Title><strong>Cereal</strong></Card.Title>
        </Card.Body>
      </Card>
   </div>
   <div class="col-sm">
   <Card style={{backgroundColor:"var(--background)"}} >
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/pouring-fresh-milk-in-glass-picture-id1337307092?b=1&k=20&m=1337307092&s=170667a&w=0&h=4Ew2f0wTeZvPjqfcpA-S26-kCqYkQnYxwXv6tKFF0us=" />
        <Card.Body>
          <Card.Title><strong>Long Life Milk</strong></Card.Title>
        </Card.Body>
      </Card>
   </div>
   </div>
   </div>
 
{/* </div> */}

<h2>Featured Communities</h2> <br/>
  <div className="container">
  <div className="row">
   <div className="col-sm">
      <Card style={{backgroundColor:"var(--background)"}}>
        <Card.Img variant="top" src={yellow} />
        <Card.Body>
        <Card.Title><strong>Colindale <br/> Foodbank <br/>
Volunteers</strong></Card.Title>
        </Card.Body>
      </Card>
      </div>
   <div class="col-sm">
    
      <Card style={{backgroundColor:"var(--background)"}}>
        <Card.Img variant="top" src={orange} />
        <Card.Body>
        <Card.Title><strong>Balham<br/> Food<br/> Consortium 
</strong></Card.Title>
        </Card.Body>
      </Card>
      </div>
   <div class="col-sm">
      <Card style={{backgroundColor:"var(--background)"}}>
        <Card.Img variant="top" src={green} />
        <Card.Body>
        <Card.Title><strong>Southwark<br/> Foodbank <br/>
Volunteer</strong></Card.Title>
        </Card.Body>
      </Card>
   </div>
   <div class="col-sm">
   <Card style={{backgroundColor:"var(--background)"}} >
        <Card.Img variant="top" src={pink} />
        <Card.Body>
        <Card.Title><strong>King's Cross<br/> Soup <br/>Kitchen</strong></Card.Title>
        </Card.Body>
      </Card>
   </div>
   </div>
   </div>















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
          <img src={salad} style={{backgroundColor:"none", borderRadius:"15px"}}alt="fruit bowl"/>
          </div></Col>
        </Row>
      </div>

<br/>
<br/>

<Card className='card3'style={{ width: '100%', backgroundColor:"var(--background)" }}>
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



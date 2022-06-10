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
   </div>
   </div>
 
{/* </div> */}

<h2>Featured Communities</h2> <br/>
  <div className="container" style={{marginBottom:"100px"}}>
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
   <Card style={{backgroundColor:"var(--background)", border:"None"}} >
        <Card.Img variant="top" src={pink} />
        <Card.Body>
        <Card.Title><strong>King's Cross<br/> Soup <br/>Kitchen</strong></Card.Title>
        </Card.Body>
      </Card>
   </div>
   </div>
   </div>


<div className="Container-card3" style={{backgroundColor:"#f9ebcf"}}>
        <Row>
          <Col xl={6}><div className="container-card3-1">
          <img  src={nav} 
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
<div className="Container-card3" style={{paddingTop:"100px"}}>
    <br/>
    <br/>
        <Row >
            
            

          <Col xl={8}><div className="container-card4-1" >
              <h5 style={{paddingLeft:"-120%",fontSize:"15px"}} >Our mission:</h5>
              <br/>
              <br/>
          <h2 style={{fontSize:"40px",textAlign:"Left",paddingBottom:"100px"}}>Connecting people in communities <br/>
through technology to reduce 
<br/>
food poverty in the UK.</h2>
</div>   
            </Col>
          <Col xl={4}><div className="container-card4-2">
          <img src={salad} style={{backgroundColor:"none", borderRadius:"15px", height:"270px" ,paddingTop:"30px"}} className="text-left" alt="fruit bowl"/>
          </div></Col>
        </Row>
      </div>

<br/>
<br/>


<Card className='card3'style={{ width: '100%', backgroundColor:'var(--light-salmon)', border:"None",padding:"inline-style", margin:0, paddingTop:"40px" }}>
  <Row>
  <Col xl={12} lg={12}  style={{padding:0}}>
  <Card.Body style={{ margin:0}}>
    <Card.Text>
    <h1 style={{paddingTop:"-50%"}}>Are you a corporation<br/> who wants to donate surplus food?</h1>
    </Card.Text>
    <Button style={{textAlign:"center"}}>Join the Corporate Community</Button>
  </Card.Body>
  </Col>
  </Row>
</Card>  






    </div>
    
    
  );
};

export default Homecards; 



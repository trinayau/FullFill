import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModalCard from "../ModalCard";
import { Col, Row, Container, Card, CardGroup, Button } from "react-bootstrap";
import "./Locator.css";

import Map from "../Map";

const Locator = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("SE1 4HD");
  const [locationData, setLocationData] = useState([]);
  const [locationArray, setLocationArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLocationArray([]);
    async function searchApi(searchString) {
      try {
        const result = await axios.get(
          `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${searchString}`
        );

        // push lat_lng of each location into an array

        const setLatLng = () =>
          result.data.map((location) => {
            const latLng = location.lat_lng.split(",");
            //  convert latLng to an object
            const latLngObj = {
              title: location.name,
              coords: {
                lat: parseFloat(latLng[0]),
                lng: parseFloat(latLng[1]),
              },
            };
            return setLocationArray((prevState) => [...prevState, latLngObj]);
          });
        setLatLng();
        setLocationData(result.data);
      } catch (err) {
        console.log(err);
      }
    }

    searchApi(submitValue);
  }, [submitValue]);

  const renderLocations = () => {
    return locationData.map((s, i) => (
      <li key={i} className="show-link">
        {/* <Card sx={{ minWidth: 275 }} className="locator-card">
          <CardContent>
            <Typography variant="h6" component="div">
              {s.name} Foodbank
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {s.distance_mi} miles away from {submitValue}
            </Typography>
            <Typography variant="body2">
              {s.address}
              <br />
              <strong>Phone number:</strong> {s.phone}
            </Typography>
          </CardContent>
          <CardActions>
            <ModalCard />
          </CardActions>
        </Card>
        <br /> */}

        <Card className="info-card" style={{ width: "18vw" }}>
          <Card.Body>
            <Card.Title> {s.name} Foodbank</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {s.distance_mi} miles away from {submitValue}
            </Card.Subtitle>
            <Card.Text style={{ fontSize: "0.9rem" }}>
              {s.address}
              <br />
              <strong>Phone number:</strong> {s.phone}
            </Card.Text>
            <ModalCard />
          </Card.Body>
        </Card>
        <br />
      </li>
    ));
  };

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h2 className="header">Find a Food Bank in your Area:</h2>
      <br />
      <p>
        {" "}
        Food banks are grassroots, charitable organisations aimed at supporting
        people who cannot afford the essentials in life.
      </p>
      <p>You can contact your local food bank using the map below.</p>

<<<<<<< HEAD
      <form onSubmit={handleSubmit}>
=======

      <form role='locatorForm' onSubmit={handleSubmit}>
>>>>>>> 8e9826362074fbbcceca0924f85505ac7bf3eb9c
        <input
          type="text"
          onChange={handleInput}
          value={inputValue}
          placeholder="Enter a postcode, city or address to locate"
        ></input>
        <button className="submitBtn" type="submit">
<<<<<<< HEAD
          Sumbit
        </button>
=======
          Search
        </button>

>>>>>>> 8e9826362074fbbcceca0924f85505ac7bf3eb9c
        <br />
        <br />
        <h5>Foodbanks near {submitValue}:</h5>
        <br />
      </form>

      <Row>
        <Col xl={7} className="locator-elements">
          <Map locationArray={locationArray} />
        </Col>
        <Col xl={3} className="locations-scroll">
          <ol>{renderLocations()}</ol>
        </Col>
      </Row>
    </>
  );
};

export default Locator;

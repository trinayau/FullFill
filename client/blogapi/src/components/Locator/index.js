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
    return (
    locationData.map((s, i) => (
      <div className="col-sm mx-auto pl-5">
      <div key={i} className="show-link mx-auto">
        <Card className="info-card text-center justify-content-center" sx={{backgroundColor: "salmon"}}>
          <Card.Body>
            <p> {s.name} Foodbank</p>
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
      </div>
      </div>
    ))
    )
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


      <form role='locatorForm' onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          value={inputValue}
          placeholder="Enter a postcode, city or address to locate"
        ></input>
        <button className="submitBtn" type="submit">
          Search
        </button>

        <br />
        <br />
        <h5>Foodbanks near {submitValue}:</h5>
        <br />
      </form>

      <div className="container">
      <div className="row justify-content-center">
        <div className="locator-elements col-md justify-content-left">
          <Map locationArray={locationArray} />
        </div>
        <div className="locations-scroll col-lg text-center justify-content-center align-items-center">
        <div className="row">
          {renderLocations()}
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default Locator;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Locator = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("SE1 4HD");
  const [locationData, setLocationData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function searchApi(searchString) {
      try {
        const result = await axios.get(
          `https://www.givefood.org.uk/api/2/foodbanks/search/?address=${searchString}`
        );
        setLocationData(result.data);
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }

    searchApi(submitValue);
  }, [submitValue]);

  const renderLocations = () => {
    return locationData.map((s, i) => (
      <li
        key={i}
        className="show-link"
        onClick={() => {
          navigate(`/find-a-foodbank/${s.name}`);
        }}
      >
        <Card sx={{ minWidth: 275 }} className="locator-card">
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
            <Button size="small">More Details</Button>
          </CardActions>
        </Card>
        <br />
      </li>
    ));
  };

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(inputValue);
    setInputValue("");
    console.log("Submitted: ", submitValue);
  };

  return (
    <>
      <h1>Find a Food Bank:</h1>
      <p>
        {" "}
        Food banks are grassroots, charitable organisations aimed at supporting
        people who cannot afford the essentials in life.
      </p>
      <br />
      <p>You can contact your local food bank using the map below.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputValue}></input>
        <button type="submit">Sumbit</button>
        <br />
        <br />
        <h3>Foodbanks near {submitValue}:</h3>
        <br />
      </form>
      <ol>{renderLocations()}</ol>
    </>
  );
};

export default Locator;

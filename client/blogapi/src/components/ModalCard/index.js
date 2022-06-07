import React, { useEffect, useState } from "react";
import "./ModalCard.css";
import axios from "axios";

const ModalCard = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("SE1 4HD");
  const [locationData, setLocationData] = useState([]);

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

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        More Details
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>Name of Foodbank</h2>
            <h4>Phone:</h4>
            <h4>Website:</h4>
            <h4>Email:</h4>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCard;

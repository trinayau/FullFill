import React from "react";

const Homepage = () => {
  return (
    <div className="App">
      <div className="flex">
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
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
import { Homepage, Newsletter } from "../../components";
import Homecards from "../../components/Homecards";

const IndexPage = () => {
  return (
    <div>
      <Homepage />
      <Homecards/>
      <Newsletter />
    </div>
  );
};

export default IndexPage;

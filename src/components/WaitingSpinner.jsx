import React from "react";
import { Spinner } from "reactstrap";

import "./css/WaitingSpinner.css";

const WaitingSpinner = () => {
  return (
    <div className="waiting-spinner-outer">
      <Spinner color="dark" className="waiting-spinner" />
    </div>
  );
};

export default WaitingSpinner;

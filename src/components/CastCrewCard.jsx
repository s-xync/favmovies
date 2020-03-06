import React from "react";
import Img from "react-image";
import { Spinner } from "reactstrap";

import "./css/CastCrewCard.css";
import constants from "../config/constants";

const CastCrewCard = ({ person }) => {
  return (
    <div className="row">
      <div className="col-5">
        <Img
          src={[
            constants.tmdbImagesApi + person.profile,
            "/crew-placeholder.jpg"
          ]}
          style={{ width: "100%" }}
          loader={
            <div className="waiting-spinner-outer">
              <Spinner
                color="dark"
                style={{ marginTop: "1rem", height: "2rem", width: "2rem" }}
              />
            </div>
          }
          alt="Crew Image"
        />
      </div>
      <div className="col-7">
        <div>{person.name}</div>
        <div className="text-muted">{person.character || person.job}</div>
      </div>
    </div>
  );
};

export default CastCrewCard;

import React from "react";

import "./css/CastCrewCard.css";
import constants from "../config/constants";

const CastCrewCard = ({ person }) => {
  return (
    <div className="row">
      <div className="col-5">
        <img
          src={constants.tmdbImagesApi + person.profile}
          alt="Profile"
          style={{ width: "100%" }}
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

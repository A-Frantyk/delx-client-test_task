import React from "react";
import { Parcel } from "../../contracts";
import "./parcelTitleStyles.css";
const parcelIcon = require("../../assets/icons/parcel_filled.svg").default;
const hrnvIcon = require("../../assets/icons/hgryvnia.svg").default;

const ParcelTitle: React.FC<{ parcel: Parcel }> = ({ parcel }) => {
  return (
    <div className="parcelTitleWrap">
      <img className="parcel-img" src={parcelIcon} alt="parcel" />
      <div className="title-descr">
        <h1 className="parcel-title">{parcel.details.name}</h1>
        <div className="info-wrap">
          <p className="status">{parcel.details.status}</p>
          <div className="price-wrap">
            <img className="price-icon" src={hrnvIcon} alt="hrn" />
            <p className="price">{parcel.details.deliveryCost}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelTitle;

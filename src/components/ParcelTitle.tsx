import React from "react";
const parcelIcon = require("../assets/icons/parcel_filled.svg").default;

const ParcelTitle: React.FC<{ parcel: any }> = ({ parcel }) => {
  return (
    <div className="parcelTitleWrap">
      <img className="parcel-img" src={parcelIcon} alt="parcel" />
      <div className="title-descr">
        <h1 className="parcel-title">{parcel.details.name}</h1>
        <div className="info-wrap">
          <p className="status">{parcel.details.status}</p>
          <p className="price">₴ {parcel.details.deliveryCost}</p>
        </div>
      </div>
    </div>
  );
};

export default ParcelTitle;

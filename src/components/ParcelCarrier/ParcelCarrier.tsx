import "./parcelCarrierStyles.css";
import React from "react";
import { Parcel } from "../../contracts";
const wheel = require("../../assets/icons/wheel.svg").default;
const phone = require("../../assets/icons/phone.svg").default;

const ParcelCarrier: React.FC<{ parcel: Parcel }> = ({ parcel }) => {
  return (
    <div className="carrier-wrap">
      <img className="wheel-icon " src={wheel} alt="wheel"></img>
      <div>
        <p className="carrier-name">{parcel.carrier.name}</p>
        <p className="carrier-tel">Driver | {parcel.carrier.phoneNumber}</p>
      </div>
      <img className="tel-img" src={phone} alt="phone" />
    </div>
  );
};

export default ParcelCarrier;

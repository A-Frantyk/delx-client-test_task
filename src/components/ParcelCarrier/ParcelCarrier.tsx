import "./parcelCarrierStyles.css";
import React from "react";
import { Parcel } from "../../contracts";
const wheel = require("../../assets/icons/wheel.svg").default;
const phone = require("../../assets/icons/phone.svg").default;

const ParcelCarrier: React.FC<{ parcel: Parcel }> = ({ parcel }) => {
  return (
    <div className="carrier-wrap">
      <a
        href="https://www.google.com/maps?q=Ukraine, Kuiv
              "
      >
        <img className="wheel-icon " src={wheel} alt="wheel"></img>
      </a>
      <div>
        <p className="carrier-name">{parcel.carrier.name}</p>
        <a className="carrier-tel" href={`tel:+38(095)324 3467`}>
          Driver | {parcel.carrier.phoneNumber}
        </a>
      </div>
      <a href={`tel:${parcel.carrier.phoneNumber}`}>
        <img className="tel-img" src={phone} alt="phone" />
      </a>
    </div>
  );
};

export default ParcelCarrier;

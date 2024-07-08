import React from "react";
const arrowIcon = require("../assets/icons/arrow_right.svg").default;
const locationIcon = require("../assets/icons/location.svg").default;
import { getFormattedDateTime } from "../helpers/dateFunc";
import { Parcel } from "../contracts";

const ParcelCenter: React.FC<{ parcel: Parcel }> = ({ parcel }) => {
  return (
    <div className="center-wrap">
      <div className="adress-wrap">
        <div>
          <p className="adress-city">
            {parcel.deliveryAddress.shippingAddress.city}
          </p>
          <p className="adress-street">
            {parcel.deliveryAddress.shippingAddress.street},
          </p>
        </div>
        <img src={locationIcon} alt="location" />
      </div>

      <div className="adress-wrap">
        <div>
          <p className="adress-city">
            {parcel.deliveryAddress.deliveryAddress.city}
          </p>
          <p className="adress-street">
            {parcel.deliveryAddress.deliveryAddress.street}
          </p>
        </div>
        <img src={locationIcon} alt="location" />
      </div>

      <div className="date-wrap">
        <p className="date-time">
          {getFormattedDateTime(parcel.deliveryAddress.shippingDate)}
        </p>
        <img src={arrowIcon} alt="arrow" />
        <p className="date-time">
          {getFormattedDateTime(parcel.deliveryAddress.deliveryDate)}
        </p>
      </div>
    </div>
  );
};

export default ParcelCenter;

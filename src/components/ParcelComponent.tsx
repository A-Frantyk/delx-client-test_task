import "./parcelStyles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParcel } from "../redux/parcelsThunks";
import { AppDispatch, RootState } from "../redux/store";
import { getFormattedDateTime } from "../helpers/dateFunc";
import { convertType } from "../helpers/convertType";
const parcelIcon = require("../assets/icons/parcel_filled.svg").default;
const arrowIcon = require("../assets/icons/arrow_right.svg").default;
const locationIcon = require("../assets/icons/location.svg").default;
const wheel = require("../assets/icons/wheel.svg").default;
const phone = require("../assets/icons/phone.svg").default;

const ParcelComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const parcel = useSelector((state: RootState) =>
    convertType(state.parcels.data),
  );
  const loading = useSelector((state: RootState) => state.parcels.loading);
  const error = useSelector((state: RootState) => state.parcels.error);

  useEffect(() => {
    dispatch(fetchParcel());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!parcel) return null;

  return (
    <div className="parcelWrap">
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

      <div className="carrier-wrap">
        <img className="wheel-icon " src={wheel} alt="wheel"></img>
        <div>
          <p className="carrier-name">{parcel.carrier.name}</p>
          <p className="carrier-tel">Driver | {parcel.carrier.phoneNumber}</p>
        </div>
        <img className="tel-img" src={phone} alt="phone" />
      </div>
    </div>
  );
};

export default ParcelComponent;

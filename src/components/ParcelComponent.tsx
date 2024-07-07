import "./ParcelStyles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParcel } from "../redux/parcelsThunks";
import { AppDispatch, RootState } from "../redux/store";
import { ParcelInput } from "../contracts";
import { getFormattedDateTime } from "../helpers/dateFunc";
const parcelIcon = require("../assets/icons/parcel_filled.svg").default;
const hrnIcon = require("../assets/icons/hgryvnia.svg").default;

function convertType(input: ParcelInput | null) {
  if (!input) return null;
  const deliveryDate = new Date(input.deliveryAddress.deliveryDate);
  const shippingDate = new Date(input.deliveryAddress.shippingDate);
  return {
    ...input,
    deliveryAddress: {
      ...input.deliveryAddress,
      deliveryDate,
      shippingDate,
    },
  };
}

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
    <div>
      <div className="parcelTitleWrap">
        <img className="parcellImg" src={parcelIcon} alt="parcel" />
        <div>
          <h1 className="parcel-title">{parcel.details.name}</h1>
          <div className="infoWrap">
            <p className="status">{parcel.details.status}</p>
            <img src={hrnIcon} alt="hrn" width={18} />
            <p className="price">{parcel.details.deliveryCost}</p>
          </div>
        </div>
      </div>
      <p>{getFormattedDateTime(parcel.deliveryAddress.shippingDate)}</p>
      <p>{getFormattedDateTime(parcel.deliveryAddress.deliveryDate)}</p>
      <h3>Delivery Address</h3>
      <p>
        Shipping Address: {parcel.deliveryAddress.shippingAddress.street},
        {parcel.deliveryAddress.shippingAddress.city}
      </p>
      <p>
        Delivery Address: {parcel.deliveryAddress.deliveryAddress.street},
        {parcel.deliveryAddress.deliveryAddress.city}
      </p>
      <h3>Carrier</h3>
      <p>Name: {parcel.carrier.name}</p>
      <p>Phone Number: {parcel.carrier.phoneNumber}</p>
    </div>
  );
};

export default ParcelComponent;

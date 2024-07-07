import "./ParcelStyles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParcel } from "../redux/parcelsThunks";
import { RootState } from "../redux/store";
import { unwrapResult } from "@reduxjs/toolkit";
const parcelIcon = require("../assets/icons/parcel_filled.svg").default;
const hrnIcon = require("../assets/icons/hgryvnia.svg").default;
const ParcelComponent: React.FC = () => {
  const dispatch = useDispatch();
  const parcel = useSelector((state: RootState) => state.parcels.data);
  const loading = useSelector((state: RootState) => state.parcels.loading);
  const error = useSelector((state: RootState) => state.parcels.error);

  useEffect(() => {
    const fetchParcelData = async () => {
      try {
        const actionResult = await dispatch(fetchParcel() as any);
        const resultAction = unwrapResult(actionResult);
      } catch (err) {
        console.error("Failed to fetch parcel data:", err);
      }
    };

    fetchParcelData();
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
      {/* <p>{parcel.deliveryAddress.shippingDate}</p>
      <p>{parcel.deliveryAddress.deliveryDate}</p>
      <h3>Delivery Address</h3>
      <p>
        Shipping Address: {parcel.deliveryAddress.shippingAddress.street},{" "}
        {parcel.deliveryAddress.shippingAddress.city}
      </p>
      <p>
        Delivery Address: {parcel.deliveryAddress.deliveryAddress.street},{" "}
        {parcel.deliveryAddress.deliveryAddress.city}
      </p>
      <h3>Carrier</h3>
      <p>Name: {parcel.carrier.name}</p>
      <p>Phone Number: {parcel.carrier.phoneNumber}</p> */}
    </div>
  );
};

export default ParcelComponent;

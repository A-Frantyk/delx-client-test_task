import "../parcelStyles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchParcel } from "../redux/parcelsThunks";
import { AppDispatch, RootState } from "../redux/store";
import { convertType } from "../helpers/convertType";
import ParcelTitle from "./ParcelTitle/ParcelTitle";
import ParcelCenter from "./ParcelCenter/ParcelCenter";
import ParcelCarrier from "./ParcelCarrier/ParcelCarrier";
import Loader from "./Loader";

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

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!parcel) return null;

  return (
    <div className="parcelWrap">
      <ParcelTitle parcel={parcel} />
      <ParcelCenter parcel={parcel} />
      <ParcelCarrier parcel={parcel} />
    </div>
  );
};

export default ParcelComponent;

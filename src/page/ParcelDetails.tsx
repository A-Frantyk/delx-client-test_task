
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store.ts';
import { setParcel } from '../redux/features/parcelSlice.ts';
import { Parcel } from '../contracts.ts';
import { mockParcelData } from '../utils/mockData.ts';
import AddressSection from '../components/AddressSection/AddressSection.tsx';
import CarrierSection from '../components/CarrierSection/CarrierSection.tsx';
import Loader from '../components/Loader.tsx';
import { typography, colors } from '../styles.ts';
import parcel_filledIcon from '../icons/parcel_filled.svg';
import hgryvniaIcon from '../icons/hgryvnia.svg';
import './ParcelDetails.css'



const ParcelDetailsComponent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const parcel = useSelector((state: RootState) => state.parcel.parcel);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setParcel(mockParcelData));
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  if (loading || !parcel) {
    return <Loader />;
  }

  const { details, deliveryAddress, carrier } = parcel;

  return (
    <div className="parcel-details-container">
       <div className="parcel-details">
      <img src={parcel_filledIcon} alt="Parcel_filled Icon" className="parcel-filled-icon" />
      <div className="details">
        <h1 className="name" style={{ ...typography.headline1, color: colors.primaryText }}>
          {details.name}
        </h1>
        <div className="status-and-delivery">
          <p className="status" style={{ ...typography.body1 }}>
            {details.status}
          </p><span style={{ ...typography.body1, color: colors.secondaryText }}> · </span>
          <p className="delivery-info" style={{ ...typography.body2, color: colors.secondaryText }}>
            <img src={hgryvniaIcon} alt="Hgryvnia Icon" className="hgryvnia-icon" />
            {details.deliveryCost}
          </p>
        </div>
      </div>
    </div>
      <AddressSection
        shippingAddress={deliveryAddress.shippingAddress}
        deliveryAddress={deliveryAddress.deliveryAddress}
        shippingDate={deliveryAddress.shippingDate}
        deliveryDate={deliveryAddress.deliveryDate}
      />

      <CarrierSection
        name={carrier.name}
        phoneNumber={carrier.phoneNumber}
      />
    </div>
  );
};

export default ParcelDetailsComponent;

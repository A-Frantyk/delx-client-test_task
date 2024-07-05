import { ParcelDetails } from './ParcelDetails';
import { ParcelDeliveryAddress } from './ParcelDeliveryAddress';
import { Carrier } from './Carrier';

import s from './Parcel.module.scss';

export const Parcel = () => {
  return (
    <div className={s.wrapper}>
      <ParcelDetails />
      <ParcelDeliveryAddress />
      <Carrier />
    </div>
  );
};

import { useAppSelector } from '../../../redux/hooks';
import { formatDateTime } from 'utils/formatDateTime';
import LocationIcon from 'assets/icons/location.svg?react';
import ArrowRightIcon from 'assets/icons/arrow_right _full.svg?react';

import s from './ParcelDeliveryAddress.module.scss';

export const ParcelDeliveryAddress = () => {
  const { shippingDate, deliveryDate, shippingAddress, deliveryAddress } =
    useAppSelector((state) => state.parcelReducer.parcel!.deliveryAddress);

  return (
    <div className={s.wrapper}>
      <ul className={s.addressList}>
        <li className={s.addressItem}>
          <div className={s.address}>
            <span className={s.city}>{shippingAddress.city}</span>
            <span className={s.street}>{shippingAddress.street}</span>
          </div>
          <LocationIcon className={s.locationIcon} width={24} height={24} />
        </li>
        <li className={s.addressItem}>
          <div className={s.address}>
            <span className={s.city}>{deliveryAddress.city}</span>
            <span className={s.street}>{deliveryAddress.street}</span>
          </div>
          <LocationIcon className={s.locationIcon} width={24} height={24} />
        </li>
      </ul>
      <div className={s.dateWrapper}>
        <span className={s.date}>{formatDateTime(shippingDate)}</span>
        <ArrowRightIcon className={s.arrow} width={24} height={24} />
        <span className={s.date}>{formatDateTime(deliveryDate)}</span>
      </div>
    </div>
  );
};

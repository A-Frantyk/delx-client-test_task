import { useAppSelector } from '../../../redux/hooks';
import ParcelIcon from 'assets/icons/parcel_filled.svg?react';
import UahIcon from 'assets/icons/hgryvnia.svg?react';

import s from './ParcelDetails.module.scss';

export const ParcelDetails = () => {
  const { deliveryCost, name, status } = useAppSelector(
    (state) => state.parcelReducer.parcel!.details
  );

  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <ParcelIcon width={40} height={40} />
      </div>
      <div className={s.detailsWrapper}>
        <h2 className={s.title}>{name}</h2>
        <p className={s.details}>
          <span className={s.status}>{status}</span>
          <span className={s.dot}>•</span>
          <span className={s.cost}>
            <UahIcon width="1em" height="1em" />
            {deliveryCost}
          </span>
        </p>
      </div>
    </div>
  );
};

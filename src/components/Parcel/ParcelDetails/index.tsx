import ParcelIcon from 'assets/icons/parcel_filled.svg?react';
import UahIcon from 'assets/icons/hgryvnia.svg?react';

import s from './ParcelDetails.module.scss';

export const ParcelDetails = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.icon}>
        <ParcelIcon width={40} height={40} />
      </div>
      <div className={s.detailsWrapper}>
        <h2 className={s.title}>Electronic products</h2>
        <div className={s.details}>
          <p className={s.status}>In Transit</p>

          <p className={s.cost}>
            <UahIcon width="1rem" height="1rem" />
            200
          </p>
        </div>
      </div>
    </div>
  );
};

import LocationIcon from 'assets/icons/location.svg?react';
import ArrowRightIcon from 'assets/icons/arrow_right _full.svg?react';

import s from './ParcelDeliveryAddress.module.scss';

export const ParcelDeliveryAddress = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.addressList}>
        <li className={s.addressItem}>
          <div className={s.address}>
            <span className={s.city}>Kyiv</span>
            <span className={s.street}>Yakonenko st.35</span>
          </div>
          <LocationIcon width={24} height={24} />
        </li>
        <li className={s.addressItem}>
          <div className={s.address}>
            <span className={s.city}>Dnipro</span>
            <span className={s.street}>Glinku st.112</span>
          </div>
          <LocationIcon width={24} height={24} />
        </li>
      </ul>
      <div className={s.dateWrapper}>
        <span className={s.date}>March 12, 10:00</span>
        <ArrowRightIcon width={24} height={24} />
        <span className={s.date}>March 13, 18:00</span>
      </div>
    </div>
  );
};

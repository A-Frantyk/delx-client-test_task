import { useAppSelector } from '../../../redux/hooks';
import { formatPhoneNumber } from 'utils/formatPhoneNumber';
import WheelIcon from 'assets/icons/wheel.svg?react';
import PhoneIcon from 'assets/icons/phone.svg?react';

import s from './Carrier.module.scss';

export const Carrier = () => {
  const { name, phoneNumber } = useAppSelector(
    (state) => state.parcelReducer.parcel!.carrier
  );

  return (
    <div className={s.carrier}>
      <div className={`${s.iconWrapper} ${s.iconWrapper_wheelIcon}`}>
        <WheelIcon width={24} height={24} />
      </div>
      <div>
        <p className={s.driverName}>{name}</p>
        <p className={s.driverPhone}>
          Driver | <span>{phoneNumber}</span>
        </p>
      </div>
      <a
        href={`tel:${formatPhoneNumber(phoneNumber)}`}
        className={`${s.iconWrapper} ${s.iconWrapper_phoneIcon}`}
      >
        <PhoneIcon width={24} height={24} />
      </a>
    </div>
  );
};

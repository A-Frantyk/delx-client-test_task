import WheelIcon from 'assets/icons/wheel.svg?react';
import PhoneIcon from 'assets/icons/phone.svg?react';

import s from './Carrier.module.scss';

export const Carrier = () => {
  return (
    <div className={s.carrier}>
      <div className={`${s.iconWrapper} ${s.iconWrapper_wheelIcon}`}>
        <WheelIcon width={24} height={24} />
      </div>
      <div>
        <p className={s.driverName}>Alexander Ponomarenko</p>
        <p className={s.driverPhone}>
          Driver | <span>+38 (095) 324 3467</span>
        </p>
      </div>
      <div className={`${s.iconWrapper} ${s.iconWrapper_phoneIcon}`}>
        <PhoneIcon width={24} height={24} />
      </div>
    </div>
  );
};

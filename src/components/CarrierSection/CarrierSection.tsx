import React from 'react';
import { typography, colors } from '../../styles.ts';
import './CarrierSection.css';
import wheelIcon from '../../icons/wheel.svg';
import phoneIcon from '../../icons/phone.svg';

interface CarrierSectionProps {
  name: string;
  phoneNumber: string;
}

const CarrierSection: React.FC<CarrierSectionProps> = ({ name, phoneNumber }) => {
  return (
    <div className="carrier-section">
      <div className="icon left">
        <img src={wheelIcon} alt="Wheel Icon" className="wheel-icon" />
      </div>
      <div className="content">
        <p style={{  ...typography.headline2, color: colors.primaryText }}>{name}</p>
        <p style={{ ...typography.body3, color: colors.secondaryText }}>Driver | {phoneNumber}</p>
      </div>
      <div className="icon right">
        <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
      </div>
    </div>
  );
};

export default React.memo(CarrierSection);

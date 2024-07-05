import React from 'react';
import { typography, colors } from '../../styles.ts';
import './AddressSection.css';
import locationIcon from '../../icons/location.svg';
import arrowIcon from '../../icons/arrow_right _full.svg';

interface AddressSectionProps {
  shippingAddress: { city: string; street: string };
  deliveryAddress: { city: string; street: string };
  shippingDate: Date;
  deliveryDate: Date;
}

const AddressSection: React.FC<AddressSectionProps> = ({
  shippingAddress,
  deliveryAddress,
  shippingDate,
  deliveryDate,
}) => {
  const formattedShippingDate = shippingDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  }) + ', ' + shippingDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  }) + ', ' + deliveryDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="address-section">
      <div className="address-container">
        <div className="vertical-line"></div>
        <div className="address-info">
          <p style={{ ...typography.headline2, color: colors.primaryText }}>
            {shippingAddress.city}
          </p>
          <p style={{ ...typography.body3, color: colors.secondaryText }}>
            {shippingAddress.street}
          </p>
        </div>
        <img src={locationIcon} alt="Location Icon" className="location-icon" />
      </div>
      <div className="address-container">
        <div className="vertical-line"></div>
        <div className="address-info">
          <p style={{ ...typography.headline2, color: colors.primaryText }}>
            {deliveryAddress.city}
          </p>
          <p style={{ ...typography.body3, color: colors.secondaryText }}>
            {deliveryAddress.street}
          </p>
        </div>
        <img src={locationIcon} alt="Location Icon" className="location-icon" />
      </div>
      <div className="section-divider"></div>
      <div className="datetime-container">
        <p className="datetime-item" style={{ ...typography.headline2, color: colors.primaryText }}>
          {formattedShippingDate}
        </p>
        <img src={arrowIcon} alt="Arrow Icon" className="arrow-icon" />
        <p className="datetime-item" style={{ ...typography.headline2, color: colors.primaryText }}>
          {formattedDeliveryDate}
        </p>
      </div>
    </div>
  );
};

export default React.memo(AddressSection);

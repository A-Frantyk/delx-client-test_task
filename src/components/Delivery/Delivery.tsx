import React from "react";
import { useSelector } from "react-redux";
import { getDeliveryAddress } from "../../redux/selectors";
import { formatDate, openLocation } from "../../utils";
import location from "../../assets/icons/location.svg";
import arrow_right_full from "../../assets/icons/arrow_right_full.svg";
import { Icon } from "../Icon";
import styles from "./Delivery.module.scss";

export const Delivery: React.FC = () => {
  const { shippingAddress, shippingDate, deliveryAddress, deliveryDate } =
    useSelector(getDeliveryAddress);

  return (
    <div
      data-test-id="delivery-component"
      className={styles["block-container"]}
    >
      <div className={styles["block-container-address"]}>
        <div className={styles["address-container"]}>
          <div className={styles["address-container-details-wrapper"]}>
            <p
              data-test-id="delivery-shipping-city"
              className={styles["address-container-city"]}
            >
              {shippingAddress.city}
            </p>
            <p
              data-test-id="delivery-shipping-street"
              className={styles["address-container-street"]}
            >
              {shippingAddress.street}
            </p>
          </div>
          <a
            data-test-id="delivery-shipping-map"
            href={openLocation(shippingAddress.city)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon={location}
              id="location"
              width={24}
              height={24}
              className={styles["icon-location"]}
            />
          </a>
        </div>
        <div className={styles["address-container"]}>
          <div className={styles["address-container-details-wrapper"]}>
            <p
              data-test-id="delivery-delivery-city"
              className={styles["address-container-city"]}
            >
              {deliveryAddress.city}
            </p>
            <p
              data-test-id="delivery-delivery-street"
              className={styles["address-container-street"]}
            >
              {deliveryAddress.street}
            </p>
          </div>
          <a
            data-test-id="delivery-delivery-map"
            href={openLocation(deliveryAddress.city)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon={location}
              id="location"
              width={24}
              height={24}
              className={styles["icon-location"]}
            />
          </a>
        </div>
      </div>

      <div className={styles["time-container"]}>
        <div
          data-test-id="delivery-shipping-date"
          className={styles["time-container-details"]}
        >
          {formatDate(new Date(shippingDate))}
        </div>

        <div className={styles["icon-wrapper"]}>
          <Icon
            icon={arrow_right_full}
            id="arrow_right_full"
            width={24}
            height={24}
            className={styles["icon-arrow"]}
          />
        </div>

        <div
          data-test-id="delivery-delivery-date"
          className={styles["time-container-details"]}
        >
          {formatDate(new Date(deliveryDate))}
        </div>
      </div>
    </div>
  );
};

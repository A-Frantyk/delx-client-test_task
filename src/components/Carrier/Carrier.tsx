import React from "react";
import { useSelector } from "react-redux";
import { getCarrier } from "../../redux/selectors";
import wheel from "../../assets/icons/wheel.svg";
import phone from "../../assets/icons/phone.svg";
import { Icon } from "../Icon";
import styles from "./Carrier.module.scss";

export const Carrier: React.FC = () => {
  const { name, phoneNumber } = useSelector(getCarrier);

  return (
    <div data-test-id="carrier-component" className={styles["block-container"]}>
      <div className={styles["icon-wrapper"]}>
        <Icon
          icon={wheel}
          id="wheel"
          width={24}
          height={24}
          className={styles["icon-wheel"]}
        />
      </div>

      <div className={styles.details}>
        <p data-test-id="driver-name" className={styles["details-name"]}>
          {name}
        </p>
        <div className={styles["details-phone"]}>
          <p className={styles["details-phone-driver"]}>Driver</p>
          <p data-test-id="driver-phone">{phoneNumber}</p>
        </div>
      </div>

      <a
        data-test-id="driver-phone-link"
        className={styles["icon-phone-wrapper"]}
        href={`tel:${phoneNumber}`}
      >
        <Icon
          icon={phone}
          id="phone"
          width={24}
          height={24}
          className={styles["icon-phone"]}
        />
      </a>
    </div>
  );
};

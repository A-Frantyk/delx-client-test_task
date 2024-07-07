import React from "react";
import { useSelector } from "react-redux";
import { getDetails } from "../../redux/selectors";
import parcel_filled from "../../assets/icons/parcel_filled.svg";
import hgryvnia from "../../assets/icons/hgryvnia.svg";
import { Icon } from "../Icon";
import styles from "./Details.module.scss";

export const Details: React.FC = () => {
  const { name, status, deliveryCost } = useSelector(getDetails);
  return (
    <div data-test-id="details-component" className={styles["block-container"]}>
      <div className={styles["icon-wrapper"]}>
        <Icon
          icon={parcel_filled}
          width={24}
          height={24}
          id="parcel_filled"
          className={styles["icon-parcel"]}
        />
      </div>
      <div className={styles.wrapper}>
        <h1 data-test-id="details-name" className={styles.title}>
          {name}
        </h1>
        <div className={styles["details-wrapper"]}>
          <div data-test-id="details-status" className={styles.status}>
            {status}
          </div>
          <div data-test-id="details-cost" className={styles.cost}>
            <Icon
              icon={hgryvnia}
              id="hgryvnia"
              width={24}
              height={24}
              className={styles["icon-hgryvnia"]}
            />
            <span>{deliveryCost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

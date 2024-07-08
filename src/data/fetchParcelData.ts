import { parcelData } from ".";
import { Parcel } from "../types";

export const fetchParcelData = async (): Promise<Parcel> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(parcelData);
    }, 1000);
  });
};

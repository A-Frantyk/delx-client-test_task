import { IState } from "../types";

export const getDetails = (state: IState) => state.details;
export const getDeliveryAddress = (state: IState) => state.deliveryAddress;
export const getCarrier = (state: IState) => state.carrier;
export const getLoading = (state: IState) => state.loading;
export const getError = (state: IState) => state.error;

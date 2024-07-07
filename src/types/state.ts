import { Address, Carrier, ParcelDeliveryAddress, ParcelDetails } from ".";

export interface StateDeliveryAddress {
  shippingAddress: Address;
  shippingDate: string;
  deliveryAddress: Address;
  deliveryDate: string;
}

export interface IState {
  details: ParcelDetails;
  deliveryAddress: ParcelDeliveryAddress;
  carrier: Carrier;
  loading: boolean;
  error: string | null;
}

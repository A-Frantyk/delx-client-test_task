export type ParcelDetails = {
  name: string;
  status: string;
  deliveryCost: number;
};

export type Address = {
  city: string;
  street: string;
};

export type ParcelDeliveryAddress = {
  shippingAddress: Address;
  shippingDate: Date | string;
  deliveryAddress: Address;
  deliveryDate: Date | string;
};

export type Carrier = {
  name: string;
  phoneNumber: string;
};

export type Parcel = {
  details: ParcelDetails;
  deliveryAddress: ParcelDeliveryAddress;
  carrier: Carrier;
};

import { Parcel } from "../types/contracts";

export const parcelData: Parcel = {
  details: {
    name: "Large Package",
    status: "In Transit",
    deliveryCost: 5.99,
  },
  deliveryAddress: {
    shippingAddress: {
      city: "New York",
      street: "123 Main St",
    },
    shippingDate: new Date("2022-01-15"),
    deliveryAddress: {
      city: "Los Angeles",
      street: "456 Elm St",
    },
    deliveryDate: new Date("2022-01-20"),
  },
  carrier: {
    name: "Fedex",
    phoneNumber: "(123) 456-7890",
  },
};

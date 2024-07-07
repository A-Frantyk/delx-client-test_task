import { ParcelInput } from "../contracts";

export function convertType(input: ParcelInput | null) {
  if (!input) return null;
  const deliveryDate = new Date(input.deliveryAddress.deliveryDate);
  const shippingDate = new Date(input.deliveryAddress.shippingDate);
  return {
    ...input,
    deliveryAddress: {
      ...input.deliveryAddress,
      deliveryDate,
      shippingDate,
    },
  };
}

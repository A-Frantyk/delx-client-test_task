import { Parcel } from '../contracts';

export const mockParcelData: Parcel = {
  details: {
    name: 'Electronic Products',
    status: 'In Transit',
    deliveryCost: 200,
  },
  deliveryAddress: {
    shippingAddress: { city: 'Kyiv', street: 'Yakonenko st. 35' },
    shippingDate: new Date('2024-03-12T10:00:00Z'),
    deliveryAddress: { city: 'Dnipro', street: 'Glinku st. 112' },
    deliveryDate: new Date('2024-03-13T18:00:00Z'),
  },
  carrier: {
    name: 'Alexander Ponomarenko',
    phoneNumber: '+38(095) 324 3467',
  },
};
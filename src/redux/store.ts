import { configureStore } from "@reduxjs/toolkit";
import parcelsReducer from "../redux/parcelsSlice";

const store = configureStore({
  reducer: {
    parcels: parcelsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          "meta.arg",
          "payload.deliveryAddress.shippingDate",
          "payload.deliveryAddress.deliveryDate",
        ],
        ignoredPaths: ["items.dates"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

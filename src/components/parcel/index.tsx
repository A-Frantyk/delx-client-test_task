import { ParcelDetails } from './ParcelDetails';
import { ParcelDeliveryAddress } from './ParcelDeliveryAddress';
import { Carrier } from './Carrier';

import s from './Parcel.module.scss';

export const Parcel = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.parcelReducer);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchParcel());
    }
  }, [status, dispatch]);

  switch (status) {
    case 'loading':
      return <p className={s.loading}>Loading...</p>;
    case 'failed':
      return <p>{error}</p>;
    case 'succeeded':
      return (
        <div className={s.wrapper}>
          <ParcelDetails />
          <ParcelDeliveryAddress />
          <Carrier />
        </div>
      );
  }
};

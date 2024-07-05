import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ParcelDetails from './page/ParcelDetails.tsx';
import { initializeParcel } from './utils/initializeParcel.ts';


const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initializeParcel(dispatch);
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', backgroundColor: '#fafafa' }}>
      <ParcelDetails />
    </div>
  );
};

export default App;
  


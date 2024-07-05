import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <Puff
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;

import React from "react";
import { Oval } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Oval
        height={100}
        width={100}
        color="#6377e2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#6377e2"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;

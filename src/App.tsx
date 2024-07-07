import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchContract } from "./redux/operations";
import { getLoading } from "./redux/selectors";
import { Carrier } from "./components/Carrier";
import { Delivery } from "./components/Delivery";
import { Details } from "./components/Details";
import "./App.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContract());
  }, []);

  return (
    <>
      {loading ? (
        <div data-test-id="loader" className="loader">
          Loading...
        </div>
      ) : (
        <div className="app">
          <Details />
          <Delivery />
          <Carrier />
        </div>
      )}
    </>
  );
}

export default App;

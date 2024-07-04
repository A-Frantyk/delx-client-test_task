import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';


const Home = lazy(() => import("./pages/Home/Home"));

export const App = () => {

  return (
    <BrowserRouter basename="/delx-client-test_task">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

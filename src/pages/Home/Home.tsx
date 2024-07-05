import cls from "./Home.module.css";
import { ParcelDetails } from '../../components/ParcelDetails/ParcelDetails';
import { Address } from '../../components/Address/Address.tsx';
import { Carrier } from '../../components/Carrier/Carrier.tsx';
const Home = () => {
  return (
    <main className={cls.container}>
        <ParcelDetails/>
        <Address/>
        <Carrier/>
    </main>
  );
};

export default Home;

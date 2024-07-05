import cls from "./Home.module.css";
import { ParcelDetails } from '../../components/ParcelDetails/ParcelDetails';
import { Address } from '../../components/Address/Address.tsx';
const Home = () => {
  return (
    <main className={cls.container}>
        <ParcelDetails/>
        <Address/>
    </main>
  );
};

export default Home;

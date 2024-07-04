import cls from "./Home.module.css";
import { ParcelDetails } from '../../components/ParcelDetails/ParcelDetails';
const Home = () => {
  return (
    <main className={cls.container}>
        <ParcelDetails/>
    </main>
  );
};

export default Home;

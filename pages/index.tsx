import { NextPage } from 'next';
import AirConditioner from '../components/AirConditioner';

const Home: NextPage = () => {
  return (
    <main className="p-2 max-w-2xl mx-auto">
      <h1 className="text-center text-3xl font-bold py-6">Air Conditioner</h1>
      <AirConditioner mode="cool" temperature={26} power={false} />
    </main>
  );
};

export default Home;

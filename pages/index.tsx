import { NextPage } from 'next';
import AirConditioner from '../components/AirConditioner';
import RemoteControl from '../components/RemoteControl';

const Home: NextPage = () => {
  return (
    <main className="p-2 max-w-2xl mx-auto">
      <AirConditioner mode="cool" temperature={26} power={true} />
      <RemoteControl />
    </main>
  );
};

export default Home;

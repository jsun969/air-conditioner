import { NextPage } from 'next';
import AirConditioner from '../components/AirConditioner';
import RCInfo from '../components/RCInfo';
import RemoteControl from '../components/RemoteControl';
import { useCheckClient } from '../hooks/useCheckClient';

const Home: NextPage = () => {
  const { isClient } = useCheckClient();

  return (
    <main className="p-2 max-w-2xl mx-auto">
      <AirConditioner />
      <div className="sm:flex">
        <div className="sm:w-1/2">
          <RemoteControl />
        </div>
        <div className="sm:w-1/2">{isClient && <RCInfo />}</div>
      </div>
    </main>
  );
};

export default Home;

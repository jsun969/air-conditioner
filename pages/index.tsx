import { NextPage } from 'next';
import { useState } from 'react';
import AirConditioner from '../components/AirConditioner';

const Home: NextPage = () => {
  const [power, setPower] = useState(false);

  return (
    <main className="p-2 max-w-2xl mx-auto">
      <h1 className="text-center text-3xl font-bold py-6">Air Conditioner</h1>
      <button onClick={() => setPower(!power)} className="border p-2">
        POWER
      </button>
      <AirConditioner mode="cool" temperature={26} power={power} />
    </main>
  );
};

export default Home;

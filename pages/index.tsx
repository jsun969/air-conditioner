import { NextPage } from 'next';
import { useEffect } from 'react';
import AirConditioner from '../components/AirConditioner';
import RCInfo from '../components/RCInfo';
import RemoteControl from '../components/RemoteControl';
import { socketClient } from '../lib/socketClient';
import { useAppDispatch, useAppSelector } from '../states/hooks';
import { acActions, acSelector } from '../states/values';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  const ac = useAppSelector(acSelector);

  useEffect(() => {
    socketClient.emit('init-ac', (id) => dispatch(acActions.setId(id)));
  }, []);

  useEffect(() => {
    socketClient.on('get-init-data', () => {
      socketClient.emit('update', ac.id, ac.data);
    });
  }, [ac]);

  return (
    <main className="p-2 max-w-2xl mx-auto">
      <AirConditioner />
      <div className="sm:flex">
        <div className="sm:w-1/2">
          <RemoteControl />
        </div>
        <div className="sm:w-1/2">
          <RCInfo />
        </div>
      </div>
    </main>
  );
};

export default Home;

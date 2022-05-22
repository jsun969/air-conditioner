import { NextPage } from 'next';
import { useEffect } from 'react';
import ACAudio from '../components/ACAudio';
import AirConditioner from '../components/AirConditioner';
import RCInfo from '../components/RCInfo';
import RemoteControl from '../components/RemoteControl';
import { useCheckClient } from '../hooks/useCheckClient';
import { socketClient } from '../lib/socketClient';
import { useAppDispatch, useAppSelector } from '../states/hooks';
import { acActions, acSelector } from '../states/values';

const Home: NextPage = () => {
  const { isClient } = useCheckClient();

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
      <div className="sm:flex sm:justify-between">
        <div className="sm:w-1/2">
          <RemoteControl />
        </div>
        <div>{isClient && <RCInfo />}</div>
      </div>
      {isClient && <ACAudio />}
    </main>
  );
};

export default Home;

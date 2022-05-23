import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCheckClient } from '../hooks/useCheckClient';
import { socketClient } from '../lib/socketClient';
import { useAppDispatch } from '../states/hooks';
import { acActions, acSelector } from '../states/values';

const SocketDataUpdater: React.FC = () => {
  const dispatch = useAppDispatch();
  const ac = useSelector(acSelector);

  const { isClient } = useCheckClient();

  useEffect(() => {
    if (!isClient) return;
    socketClient.on('update', (data) => dispatch(acActions.setData(data)));
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    if (ac.setDataLock) {
      dispatch(acActions.unlockSetData());
      return;
    }
    socketClient.emit('update', ac.id, ac.data);
  }, [ac.data]);

  return <div />;
};

export default SocketDataUpdater;

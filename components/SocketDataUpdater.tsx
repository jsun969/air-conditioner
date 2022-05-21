import React, { useEffect } from 'react';
import { useCheckClient } from '../hooks/useCheckClient';
import { socketClient } from '../lib/socketClient';
import { useAppDispatch } from '../states/hooks';
import { acActions } from '../states/values';

const SocketDataUpdater: React.FC = () => {
  const dispatch = useAppDispatch();

  const { isClient } = useCheckClient();

  useEffect(() => {
    if (!isClient) return;
    socketClient.on('update', (data) => dispatch(acActions.setData(data)));
  }, [isClient]);

  return <div />;
};

export default SocketDataUpdater;

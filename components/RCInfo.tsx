import { QRCodeSVG } from 'qrcode.react';
import React, { useEffect } from 'react';
import { socketClient } from '../lib/socketClient';
import { useAppDispatch, useAppSelector } from '../states/hooks';
import { acActions, acSelector } from '../states/values';

const RCInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const ac = useAppSelector(acSelector);

  useEffect(() => {
    socketClient.emit('init-ac', (id) => dispatch(acActions.setId(id)));
  }, []);

  useEffect(() => {
    socketClient.on('get-init-data', () => {
      console.log('get init data');
      socketClient.emit('update', ac.id, ac.data);
    });
  }, [ac]);

  return (
    <div className="p-4">
      <div className="mb-2">ID: {ac.id}</div>
      <QRCodeSVG value={`${window.location.href}rc/${ac.id}`} size={256} />
    </div>
  );
};

export default RCInfo;

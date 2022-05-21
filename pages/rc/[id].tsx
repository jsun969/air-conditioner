import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import RemoteControl from '../../components/RemoteControl';
import { socketClient } from '../../lib/socketClient';
import { useAppDispatch, useAppSelector } from '../../states/hooks';
import { acActions, acSelector } from '../../states/values';

const WirelessRC: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useAppDispatch();
  const ac = useAppSelector(acSelector);

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(acActions.setId(id as string));
    socketClient.emit('init-rc', id as string);
  }, [router.isReady]);

  return (
    <main className="p-2 max-w-md mx-auto">
      <div>{ac.data.temperature}</div>
      <div>
        <RemoteControl />
      </div>
    </main>
  );
};

export default WirelessRC;

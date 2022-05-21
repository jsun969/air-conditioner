import clsx from 'clsx';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import RemoteControl from '../../components/RemoteControl';
import { socketClient } from '../../lib/socketClient';
import { useAppDispatch, useAppSelector } from '../../states/hooks';
import { acActions, acSelector } from '../../states/values';
import digitalFontStyles from '../../styles/digital-font.module.css';

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
    <main className="p-4 max-w-sm mx-auto">
      <div className="flex justify-around items-center py-7 border rounded-xl mb-4">
        <div
          className={clsx(
            'text-8xl transition-colors duration-700',
            digitalFontStyles.font,
            !ac.data.power && 'text-gray-400',
          )}
        >
          {ac.data.temperature}
        </div>
        <h6
          className={clsx(
            'text-6xl transition-all duration-700',
            !ac.data.power && 'grayscale',
          )}
        >
          {ac.data.mode === 'cool' ? '❄️' : '☀️'}
        </h6>
      </div>
      <div>
        <RemoteControl />
      </div>
    </main>
  );
};

export default WirelessRC;

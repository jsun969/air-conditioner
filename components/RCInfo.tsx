import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { useCheckClient } from '../hooks/useCheckClient';
import { useAppSelector } from '../states/hooks';
import { acSelector } from '../states/values';

const RCInfo: React.FC = () => {
  const ac = useAppSelector(acSelector);

  const { isClient } = useCheckClient();

  if (!isClient) return <div />;

  return (
    <button
      className="mt-2"
      onClick={() => window.open(`${window.location.href}rc/${ac.id}`)}
    >
      <div className="mb-2 text-center">{ac.id}</div>
      <QRCodeSVG
        value={`${window.location.href}rc/${ac.id}`}
        size={256}
        className="mx-auto"
      />
    </button>
  );
};

export default RCInfo;

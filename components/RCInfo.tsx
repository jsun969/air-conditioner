import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { useAppSelector } from '../states/hooks';
import { acSelector } from '../states/values';

const RCInfo: React.FC = () => {
  const ac = useAppSelector(acSelector);

  return (
    <button
      className="w-full mx-auto"
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

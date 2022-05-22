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
      <div className="text-center">{ac.id}</div>
      <QRCodeSVG
        value={`${window.location.href}rc/${ac.id}`}
        size={256}
        className="my-1 mx-auto"
      />
      <div className="text-center text-xs font-bold">
        Scan the QR code for wireless remote control
      </div>
    </button>
  );
};

export default RCInfo;

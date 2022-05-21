import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { useCheckClient } from '../hooks/useCheckClient';
import { useAppSelector } from '../states/hooks';
import { acSelector } from '../states/values';

const RCInfo: React.FC = () => {
  const ac = useAppSelector(acSelector);

  const { isClient } = useCheckClient();

  return (
    <div className="p-4">
      <div className="mb-2">ID: {ac.id}</div>
      {isClient && (
        <QRCodeSVG value={`${window.location.href}rc/${ac.id}`} size={256} />
      )}
    </div>
  );
};

export default RCInfo;

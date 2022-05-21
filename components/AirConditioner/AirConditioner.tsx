import clsx from 'clsx';
import React from 'react';
import { useAppSelector } from '../../states/hooks';
import digitalFontStyles from '../../styles/digital-font.module.css';

const Wind: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <div
      className={clsx(
        'flex justify-center gap-28 mt-6 transition-opacity duration-700',
        show ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="h-16 w-1 bg-gray-300 rotate-12" />
      <div className="h-16 w-1 bg-gray-300" />
      <div className="h-16 w-1 bg-gray-300 -rotate-12" />
    </div>
  );
};

const AirConditioner: React.FC = () => {
  const power = useAppSelector((state) => state.values.power);
  const mode = useAppSelector((state) => state.values.mode);
  const temperature = useAppSelector((state) => state.values.temperature);

  return (
    <div className="my-16">
      <div className="bg-white h-36 sm:h-44 shadow relative border rounded-t-xl rounded-b-3xl">
        <div className="border absolute bottom-8 w-full" />
        <div className="absolute top-6 right-6">
          <h6 className="text-sm mb-2">{mode === 'cool' ? '❄️' : '☀️'}</h6>
          <h4
            className={clsx(
              'text-gray-300 text-3xl sm:text-4xl',
              digitalFontStyles.font,
            )}
          >
            {temperature}°C
          </h4>
        </div>
        <div
          className={clsx(
            'absolute h-1 w-1 rounded-full bottom-6 right-2 transition-colors duration-700',
            power ? 'bg-green-400' : 'bg-gray-200',
          )}
        />
      </div>
      <Wind show={power} />
    </div>
  );
};

export default AirConditioner;

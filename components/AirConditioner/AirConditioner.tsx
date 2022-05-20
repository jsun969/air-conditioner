import React from 'react';

interface AirConditionerProps {
  mode: 'cool' | 'heat';
  temperature: number;
  power: boolean;
}

const AirConditioner: React.FC<AirConditionerProps> = ({
  mode,
  temperature,
  power,
}) => {
  return (
    <div className="bg-white h-44 shadow relative border rounded-t-xl rounded-b-3xl">
      <div className="border absolute bottom-8 w-full" />
      <div className="absolute top-6 right-6">
        <h6 className="text-sm mb-2">{mode === 'cool' ? '❄️' : '☀️'}</h6>
        <h4 className="text-gray-300 text-4xl">{temperature}°C</h4>
      </div>
      <div
        className={`absolute h-1 w-1 rounded-full bottom-6 right-2 ${
          power ? 'bg-green-400' : 'bg-gray-200'
        }`}
      />
    </div>
  );
};

export default AirConditioner;

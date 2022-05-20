import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface ControlButtonProps {
  icon: string;
  className?: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ icon, className }) => {
  return (
    <button className={clsx('m-1 p-2 pt-3 rounded-full', className)}>
      <Image src={`/icons/${icon}.svg`} alt="power" width={32} height={32} />
    </button>
  );
};

const RemoteControl: React.FC = () => {
  return (
    <div className="sm:w-1/2 grid grid-cols-2 gap-2 p-4">
      <ControlButton
        icon="power"
        className="bg-green-600 active:bg-green-500 col-span-2"
      />
      <ControlButton
        icon="snowflake"
        className="bg-blue-700 active:bg-blue-600"
      />
      <ControlButton
        icon="sun"
        className="bg-orange-500 active:bg-orange-400"
      />
      <ControlButton
        icon="temperature-plus"
        className="bg-slate-600 active:bg-slate-500"
      />
      <ControlButton
        icon="temperature-minus"
        className="bg-slate-600 active:bg-slate-500"
      />
      <ControlButton icon="github" className="bg-black col-span-2" />
    </div>
  );
};

export default RemoteControl;

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../states/hooks';
import { acActions, acSelector } from '../states/values';

interface ControlButtonProps {
  icon: string;
  className?: string;
  onClick: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  icon,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx('m-1 p-2 pt-3 rounded-full', className)}
      onClick={onClick}
    >
      <Image src={`/icons/${icon}.svg`} alt="power" width={32} height={32} />
    </button>
  );
};

const RemoteControl: React.FC = () => {
  const ac = useAppSelector(acSelector);
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-2 gap-2">
      <ControlButton
        icon="power"
        className={clsx(
          'col-span-2',
          ac.data.power
            ? 'bg-red-600 active:bg-red-500'
            : 'bg-green-600 active:bg-green-500',
        )}
        onClick={() => dispatch(acActions.setPower(!ac.data.power))}
      />
      <ControlButton
        icon="snowflake"
        className="bg-blue-700 active:bg-blue-600"
        onClick={() => dispatch(acActions.setMode('cool'))}
      />
      <ControlButton
        icon="sun"
        className="bg-orange-500 active:bg-orange-400"
        onClick={() => dispatch(acActions.setMode('heat'))}
      />
      <ControlButton
        icon="temperature-minus"
        className="bg-slate-600 active:bg-slate-500"
        onClick={() => dispatch(acActions.decreaseTemperature())}
      />
      <ControlButton
        icon="temperature-plus"
        className="bg-slate-600 active:bg-slate-500"
        onClick={() => dispatch(acActions.increaseTemperature())}
      />
      <ControlButton
        icon="github"
        className="bg-black col-span-2"
        onClick={() =>
          window.open('https://github.com/jsun969/air-conditioner')
        }
      />
    </div>
  );
};

export default RemoteControl;

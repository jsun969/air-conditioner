import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../states/hooks';
import { acSelector } from '../states/values';

const ACAudio: React.FC = () => {
  const ac = useAppSelector(acSelector);

  const [workingAudioTimeout, setWorkingAudioTimeout] =
    useState<NodeJS.Timeout>();
  useEffect(() => {
    const startAudio = document.getElementById('start') as HTMLAudioElement;
    const workingAudio = document.getElementById('working') as HTMLAudioElement;
    if (ac.data.power) {
      startAudio.play();
      // delay 8 seconds for seamless audio
      setWorkingAudioTimeout(
        setTimeout(() => {
          workingAudio.play();
        }, 8000),
      );
    } else {
      clearTimeout(workingAudioTimeout);
      startAudio.pause();
      workingAudio.pause();
      startAudio.currentTime = 0;
      workingAudio.currentTime = 0;
    }
  }, [ac.data.power]);

  return (
    <>
      <audio src="/audio/start.mp3" id="start" />
      <audio src="/audio/working.mp3" id="working" loop={true} />
    </>
  );
};

export default ACAudio;

import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'react-lottie';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import './style.css';
import LottieData from './122255-spooky-pumpkin.json';

export default function App() {
  const playerRef = useRef(Player);
  const handlePlay = () => playerRef.current.play();
  const handleStop = () => playerRef.current.stop();
  const handlePause = () => playerRef.current.pause();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <h1>Hello TTOWA!!</h1>
      <h2>1.Lottie Add</h2>
      <Lottie

        options={defaultOptions}
        height={300}
        width={300}
        isClickToPauseDisabled={true}
      />

      <h2>2.Lottie Control</h2>
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
        className="players"
        //loop
        //autoplay
        style={{ height: '200px', width: '300px' }}
        ref={playerRef}
      />
      <div
        className="button_box"
        style={{
          textAlign: 'center',
          width: '100%',
          display: 'block',
        }}
      >
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}

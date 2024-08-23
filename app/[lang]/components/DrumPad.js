'use client';
import { useState, useEffect } from 'react';
import { start, Sampler } from 'tone';

const DrumPad = ({ soundFile, color, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sampler, setSampler] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contextStarted, setContextStarted] = useState(false); // Track if the audio context has started

  useEffect(() => {
    // Initialize Tone.js without starting it
    const initializeTone = async () => {
      const loadedSampler = new Sampler({
        urls: {
          C4: `/sounds/${soundFile}` // Use proper string interpolation
        },
        release: 1,
        onload: () => {
          setSampler(loadedSampler);
          setIsLoaded(true);
        },
        onerror: (err) => {
          console.error("Sampler loading error:", err);
        }
      }).toDestination();
    };

    initializeTone();
  }, [soundFile]);

  const playSound = async () => {
    if (!contextStarted) {
      // Start Tone.js audio context on user interaction
      try {
        await start();
        setContextStarted(true);
        console.log("Tone.js started");
      } catch (error) {
        console.error("Error starting Tone.js:", error);
        return;
      }
    }

    if (sampler && isLoaded) {
      sampler.triggerAttackRelease('C4', '8n');
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 500); // Reset playing state after 500ms
    } else {
      console.warn("Sampler not loaded or not available");
    }
  };

  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '5px', textAlign: 'center' }}>
      <div>{title}</div>
      <button onClick={playSound} disabled={!isLoaded}>
        {isPlaying ? 'Playing...' : 'Play Sound'}
      </button>
    </div>
  );
};

export default DrumPad;

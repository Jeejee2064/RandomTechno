'use client';
import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

function generateRandomSequence(steps) {
  const sequence = [];
  
  for (let i = 0; i < steps; i++) {
    let randomValue;
    let previousStepHasNote = (i > 0 && sequence[i - 1] !== '');

    // Increase chance of blank if the previous step had a note
    if (previousStepHasNote) {
      randomValue = Math.random();
      if (randomValue < 0.85) {
        sequence.push(''); // More likely to be blank
      } else if (randomValue < 0.90) {
        sequence.push('D#3'); // Less likely
      } else {
        sequence.push('D3'); // Even less likely
      }
    } else {
      // Regular distribution
      randomValue = Math.random();
      if (randomValue < 0.5) {
        sequence.push(''); // Regular chance for blank
      } else if (randomValue < 0.85) {
        sequence.push('D3'); // Regular chance for D3
      } else {
        sequence.push('D#3'); // Regular chance for D#3
      }
    }
  }

  return sequence;
}

const Sequencer = () => {
  const [sequence, setSequence] = useState(generateRandomSequence(16));
  const [isPlaying, setIsPlaying] = useState(false);
  const [sampler, setSampler] = useState(null);
  const [drumSampler, setDrumSampler] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const sequenceRef = useRef(null);

  useEffect(() => {
    const initializeSampler = async () => {
      const newSampler = new Tone.Sampler({
        urls: {
          D3: '/sounds/choir.wav',
          'D#3': '/sounds/bass.mp3',
        },
        onload: () => setIsLoaded(true),
        onerror: (err) => console.error('Sampler loading error:', err),
      }).toDestination();

      setSampler(newSampler);

      const newDrumSampler = new Tone.Sampler({
        urls: {
          C1: '/sounds/Kick.WAV',     // Ensure these paths are correct
          D1: '/sounds/Clap.WAV',     // Ensure these paths are correct
          E1: '/sounds/HatOpen.WAV',  // Ensure these paths are correct
        },
        onload: () => setIsLoaded(true),
        onerror: (err) => console.error('Drum Sampler loading error:', err),
      }).toDestination();

      setDrumSampler(newDrumSampler);
    };

    initializeSampler();
  }, []);

  const startSequence = async () => {
    if (!isLoaded || !sampler || !drumSampler) return;

    try {
      await Tone.start();
      console.log('Tone.js context started');
    } catch (error) {
      console.error('Error starting Tone.js:', error);
      return;
    }

    if (sequenceRef.current) {
      sequenceRef.current.dispose();
    }

    // Create the sequence with drum patterns
    const newSequence = new Tone.Sequence(
      (time, step) => {
        // Bass note
        const note = sequence[step];
        if (note) {
          sampler.triggerAttackRelease(note, '8n', time);
        }

        // Drum patterns
        if ((step + 1) % 4 === 1 ) {
          drumSampler.triggerAttackRelease('C1', '8n', time); // Kick
        }
        if (step === 3 || step === 11 || step === 19 || step === 27) {
          drumSampler.triggerAttackRelease('D1', '8n', time); // Clap
        }
        if ((step + 1) % 4 === 3) {
         drumSampler.triggerAttackRelease('E1', '8n', time, undefined, hatGain.gain.value); 
        }
      },
      Array.from(Array(16).keys()), // Step indices
      '16n'
    ).start(0);

    sequenceRef.current = newSequence;
    Tone.Transport.start();
    setIsPlaying(true);
  };

  const stopSequence = () => {
    if (sequenceRef.current) {
      sequenceRef.current.stop();
    }
    Tone.Transport.stop();
    setIsPlaying(false);
  };

const changeSequence = () => {
  // Generate new 16-step sequence
  const newSequence = generateRandomSequence(16);
  
  // Update the entire sequence
  setSequence(newSequence);
};

  useEffect(() => {
    if (isPlaying && sequenceRef.current) {
      sequenceRef.current.dispose(); // Dispose of the old sequence

      // Create and start the new sequence
      const newSequence = new Tone.Sequence(
        (time, step) => {
          // Bass note
          const note = sequence[step];
          if (note) {
            sampler.triggerAttackRelease(note, '8n', time);
          }

          // Drum patterns
          if ((step + 1) % 4 === 1) {
            drumSampler.triggerAttackRelease('C1', '8n', time); // Kick
          }
          if (step === 4 || step === 12) {
            drumSampler.triggerAttackRelease('D1', '8n', time); // Clap
          }
          if ((step + 1) % 4 === 3) {
            drumSampler.triggerAttackRelease('E1', '8n', time); // Hat
          }
        },
        Array.from(Array(16).keys()), // Step indices
        '16n'
      ).start(0);

      sequenceRef.current = newSequence;
    }
  }, [sequence, isPlaying]);

  return (
    <div className='bg-white flex justify-center items-center m-auto w-screen '>
      <button onClick={isPlaying ? stopSequence : startSequence} disabled={!isLoaded} 
      className='bg-gray-600 text-white p-12 rounded-lg m-12'
      >
        {isPlaying ? 'Stop' : 'Play'}
      </button>
      <button onClick={changeSequence} disabled={!isLoaded}
      className='bg-gray-800 text-white p-12 rounded-lg m-12'
      >
        Change Sequence
      </button>
      {!isLoaded && <p>Loading sample...</p>}
    </div>
  );
};

export default Sequencer;

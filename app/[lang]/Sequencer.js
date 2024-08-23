'use client';
import { useState, useEffect } from 'react';
import { Sequence, Transport, start } from 'tone';
import DrumPad from './DrumPad'; // Import your DrumPad component

const Sequencer = () => {
  const [steps, setSteps] = useState(Array(4).fill(Array(16).fill(false))); // 4 lines, 16 steps each
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    Transport.bpm.value = bpm;
  }, [bpm]);

  const toggleStep = (line, step) => {
    const newSteps = [...steps];
    newSteps[line][step] = !newSteps[line][step];
    setSteps(newSteps);
  };

  const handlePlay = async () => {
    if (!isPlaying) {
      await start();
      const sequence = new Sequence((time, note) => {
        // Add drum pad trigger here based on the step and line
        console.log(`Playing note: ${note}`);
      }, getSequence(), '16n');
      sequence.loop = true;
      sequence.start();
      Transport.start();
      setIsPlaying(true);
    } else {
      Transport.stop();
      setIsPlaying(false);
    }
  };

  const getSequence = () => {
    return steps.flatMap((line, lineIndex) =>
      line.map((isActive, stepIndex) =>
        isActive ? `C${lineIndex + 4}` : null
      )
    );
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(16, 1fr)', gap: '2px' }}>
        {steps[0].map((_, stepIndex) => (
          <div key={stepIndex} style={{ display: 'flex' }}>
            {[0, 1, 2, 3].map(lineIndex => (
              <div
                key={lineIndex}
                onClick={() => toggleStep(lineIndex, stepIndex)}
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: steps[lineIndex][stepIndex] ? 'blue' : 'gray',
                  margin: '1px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <input
        type="number"
        value={bpm}
        onChange={(e) => setBpm(parseInt(e.target.value))}
        min="60"
        max="180"
        step="1"
      />
      <button onClick={handlePlay}>
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  );
};

export default Sequencer;

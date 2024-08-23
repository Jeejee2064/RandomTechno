



import DrumPad from "./components/DrumPad";
import { getDictionary } from "../../dictionary";
import Sequencer from "./components/Sequencer";



export default async function Home({params}) {
  const lang = await getDictionary(params.lang);




  function generateRandomSequence(steps) {
  const sequence = [];

  for (let i = 0; i < steps; i++) {
    const randomValue = Math.random();

    if (randomValue < 0.5) {
      sequence.push(""); // Blank step
    } else if (randomValue < 0.85) {
      sequence.push("D3");
    } else {
      sequence.push("D#3");
    }
  }

  return sequence;
}

const sequence = generateRandomSequence(16);
console.log(sequence);

  return (
 
     
    <div className="bg-gray-800">
      <DrumPad soundFile='Crash.WAV' color='#fff' title='Crash'/>
           <DrumPad soundFile='Kick.WAV' color='#fff' title='Kick'/>
                <DrumPad soundFile='Clap.WAV' color='#fff' title='Clap'/>
                     <DrumPad soundFile='HatOpen.WAV' color='#fff' title='Open Hat'/>
          
<Sequencer/>
    </div>
  

  );
};



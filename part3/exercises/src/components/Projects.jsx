import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

  function handleClick() {
   if (index < data.length-1)
   { setIndex(index + 1) }
   else
   { setIndex(0); }
  }

  let project = data[index];

  return (
    <div>
      <button onClick={handleClick} className='btn'>
        Next
      </button>
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.alt} className='picture'/>
    </div>
  );
}

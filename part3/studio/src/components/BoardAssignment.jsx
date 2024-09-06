import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState('no boards yet!');

   const boards = [
      {label: 'Breakfast Recipes', value: 'breakfast'},
      {label: 'Lunch Recipes', value: 'lunch'},
      {label: 'Dinner Recipes', value: 'dinner'}
   ];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board, index) => (
            <option key={index} value={board.value}>
               {board.label}
            </option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}

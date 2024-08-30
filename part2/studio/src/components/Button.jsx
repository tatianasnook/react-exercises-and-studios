import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';
import { useState } from 'react';

function Button(props) {
  const [saveButton, setSaveButton] = useState(props.saveButton);

  const handleClick = bool => {
    bool ? alert("You are saving this pin!") : alert('You are removing this pin!');
    setSaveButton(now => !now)
  }

   return saveButton ? <SaveButton handleClick={handleClick} /> : <ClickedButton handleClick={handleClick}/>;
}
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 
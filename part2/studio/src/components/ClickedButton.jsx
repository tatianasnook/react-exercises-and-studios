import "./styling.css";

function ClickedButton({ handleClick }) {

  return(
    <button id="clickedButton" onClick={event => handleClick(false)}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton

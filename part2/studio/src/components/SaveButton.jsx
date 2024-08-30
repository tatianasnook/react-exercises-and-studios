import "./styling.css";

function SaveButton({ handleClick }) {
  
  return (
    <button id="saveButton" onClick={event => handleClick(true)}>
      Save
    </button>
  );
}

export default SaveButton;

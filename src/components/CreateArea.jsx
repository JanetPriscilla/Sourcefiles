import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //to slide in the notes entering area
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  //Passing new note to App
  function submitNote(event) {
    //preventing empty notes to be added
    if (note.title !== "" && note.content !== "") {
      props.onAdd(note);
      // clearing contents of note once add button is clicked
      setNote({
        title: "",
        content: "",
      });
      event.preventDefault();
    } else {
      alert("Kindly ensure both fields are not empty!!");
    }
  }

  //Tracking notes title and contents with state constant
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

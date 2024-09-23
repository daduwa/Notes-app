import React from "react";
import '../style.css'
import { TiDocumentDelete } from "react-icons/ti";

function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id} className="title-container" >
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]} </h4>
        <span className="delete--icon" onClick={(event)=>props.deleteNote(event,note.id)}><TiDocumentDelete/></span>
      </div>
    </div>
  ));

 
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3 className="">Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}

export default Sidebar;

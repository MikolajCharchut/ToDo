import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { taskType } from "./Home";
import { removeNote, removeTask, getNote, getTask, submitNote } from "../data-access/data-access";

function Task() {

  const navigate = useNavigate();
  const [taskObject, setTaskObject] = useState({});
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  let { id } = useParams();

  useEffect(() => {
    getTask(id).then((response) => {setTaskObject(response.data)})
    getNote(id).then((response) => {setNotes(response.data)})
  },[id, newNote]);

  const addNote = () => {
    submitNote(newNote, id).then(() => {
         const noteToAdd = {note: newNote};
          setNotes([...notes, noteToAdd]);
          setNewNote("");
    });
  };

  const deleteNote = (id) => {
    removeNote(id).then(() => {
      setNotes(notes.filter((val) => {
        return val.id !== id;
      }));
    });
  };

  const deleteTask = (id) => {
    removeTask(id).then(() => {
         navigate("/");
    });
  };

  return (
    <div className="taskPage">
      <div className="leftSide">
        <div className="task" id="individual">
          <div className={taskType(taskObject.priority)}> {taskObject.priority} </div>
          <div className="body">{taskObject.task}</div>
          <div className={taskType(taskObject.priority)}> 
            <button onClick={() => {deleteTask(taskObject.id)}}>Zrobione!</button>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addNoteContainer">
          <input 
          type="text" 
          placeholder="Notatka..." 
          value={newNote}
          onChange={(event) => {setNewNote(event.target.value)}}
          />
          <button disabled={!newNote} onClick={addNote}> Dodaj Notatkę </button>
        </div>
        <div className="listOfNotes">

          {notes.map(note => {
            return (
            <div className="note"> 
              {note.note} 
              <button onClick={() => {deleteNote(note.id)}}>X</button>
            </div>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default Task;


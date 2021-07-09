import React from 'react';
import {NoteItem} from "./NoteItem";

export const Notes = (props) => {
    return (
        <div className="container-fluid mb-5">
            <h3 className="text-center my-3"> Notes </h3>
            {
                props.notes.length===0 ? <div className="text-center"> No notes to display </div>:
                props.notes.map((note) => {
                    return (<NoteItem note={note} key={note.sno} onDelete={props.onDelete} />)
                })
            }
        </div>
    )
}

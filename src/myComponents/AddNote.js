import React, { useState } from 'react'

export const AddNote = ({addNote}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert('Note cannot be blank');
        }
        else
        {
            addNote(title,desc);
            setTitle("");
            setDesc("");
        }
        // setTitle("");
        // setDesc("");
    }
    let formStyle={
        maxWidth: "50vw",
        margin: "0px auto"
    }
    return (
        <div className="container my-4">
            <h2 className="text-center">Add Notes :</h2>
            <form onSubmit={submit} style={formStyle}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} className="form-control" id="title" onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Note:</label>
                    <textarea value={desc} rows="4" className="form-control" id="desc" onChange={(e)=>setDesc(e.target.value)} aria-label="With textarea"></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add Note</button>
            </form>
        </div>
    )
}

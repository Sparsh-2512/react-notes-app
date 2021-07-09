import React from 'react'

export const NoteItem = ({note,onDelete}) => {
    let cardStyle = {
        width: '18rem'
    }
    return (
        <>
        <div className="card d-inline-block m-3" style={cardStyle}>
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.desc}</p>
                <button className="btn btn-danger" onClick={()=>{onDelete(note)}}>Delete</button>
            </div>
        </div>  
        </>
    )
}

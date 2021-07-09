import './App.css';
import Header from './myComponents/Header';
import {AddNote} from './myComponents/AddNote';
import {Notes} from './myComponents/Notes';
import Footer from "./myComponents/Footer";
import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";


function App() {
	let initNote;
	if(localStorage.getItem("notes")===null)
		initNote = [];
	else
		initNote = JSON.parse(localStorage.getItem("notes"));
	const onDelete = (note)=>{
		console.log(`On Delete of note`,note);
		// This won't work out for deleting the notes we need to use use state to update the rendering
		// let index = notes.indexOf(note);
		// notes.splice(index,1);
		setNotes(notes.filter((e)=>{
			return e!==note;
		}));
		localStorage.setItem("notes",JSON.stringify(notes));
	}
	const addNote = (title,desc)=>{
		let sno;
		if(notes.length===0)
			sno = 0;
		else
			sno = notes[notes.length-1].sno + 1;
		const myNote = {
			sno: sno,
			title: title,
			desc: desc,
		}
		setNotes([...notes,myNote]);
	}
	const [notes, setNotes] = useState(initNote);
	useEffect(() => {
		localStorage.setItem("notes",JSON.stringify(notes));
	}, [notes])
	return (
		<>
		<Router>
			<Header title="Notes App"/>
			<Switch>
				<Route path="/" exact>
					<Notes notes={notes} onDelete={onDelete}/>
				</Route>
				<Route path="/add" exact>
					<AddNote addNote={addNote}/>
				</Route>
			</Switch>
			<Footer/>
		</Router>
		</>
	);
}

export default App;

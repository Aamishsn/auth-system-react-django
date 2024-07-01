import React from 'react'
import { useState, useEffect } from "react";
import api from "../api";
// import Note from "../components/Note" 
import "../styles/Home.css"
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'; 


const HomePage = () => {

    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    // useEffect(() => {
    //     getNotes();
    // }, []);

    // const getNotes = () => {
    //     api
    //         .get("/api/notes/")
    //         .then((res) => res.data)
    //         .then((data) => {
    //             setNotes(data);
    //             console.log(data);
    //         })
    //         .catch((err) => alert(err));
    // };

    // const deleteNote = (id) => {
    //     api
    //         .delete(`/api/notes/delete/${id}/`)
    //         .then((res) => {
    //             if (res.status === 204) alert("Note deleted!");
    //             else alert("Failed to delete note.");
    //             getNotes();
    //         })
    //         .catch((error) => alert(error));
    // };

    // const createNote = (e) => {
    //     e.preventDefault();
    //     api
    //         .post("/api/notes/", { content, title })
    //         .then((res) => {
    //             if (res.status === 201) alert("Note created!");
    //             else alert("Failed to make note.");
    //             getNotes();
    //         })
    //         .catch((err) => alert(err));
    // };

        useEffect(() => {
        getUser();
    }, []);


     const getUser = () => {
        const res=api
            .get("api/auth/users/me/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => {
                return(
                <h1>PLEASE LOGIN TO CONTINUE</h1>

            )});
    };


    return (
        <div>
            {/* <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form> */}

            <h1>this is home page </h1>

            <h1>welcome {notes.name}! Your id and email address is</h1>


            <h3>{notes.id}</h3>
            <h3>{notes.email}</h3>

            <a href="/logout">LOGOUT</a>
            <a href="/change-password">change password</a>

            

        </div>
    )
}

export default HomePage
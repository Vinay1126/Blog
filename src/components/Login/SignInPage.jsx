import React from 'react'
import SignIn from './SignIn'
import './SignIn.css'

export default function SignInPage() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
        console.log(notes)
        // props.onAdd(newNote)
    }

    return (
        <div>
            <SignIn />
        </div>
    )
}

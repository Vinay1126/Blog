import React, { useState } from 'react'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'

export default function SignIn() {
    const navigate = useNavigate();
    const [note, setNote] = useState({
        title: "",
        topic: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(value)

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote() {
        navigate('/');
        console.log(note)
    }

    return (
        <div className='signIn'>
            <div>
                <ArrowBackRoundedIcon onClick={() => navigate('/')} className='backBtn' />
            </div>
            <div>
                <h2 className='mgHead'>Write your blog!!!</h2>
            </div>
            <div className='topic mgTop'>
                <div>
                    <h4>Headline:</h4>
                </div>
                <div>
                    <select name="title"
                        onChange={handleChange}
                        value={note.title}
                        className='selectOption'>
                        <option>Select an option</option>
                        <option>News Feed</option>
                        <option>Jobs</option>
                        <option>Update on upcoming events</option>
                    </select>
                </div>
            </div>
            <div className='topic'>
                <div>
                    <h4>Sub-Topic:</h4>
                </div>
                <div>
                    <select
                        name="topic"
                        onChange={handleChange}
                        value={note.topic}
                        className='selectOption'>
                        <option>Select an option</option>
                        <option>Trending</option>
                        <option>Important</option>
                        <option>Everyday</option>
                        <option>Money</option>
                        <option>opportunities</option>
                    </select>
                </div>
            </div>
            <div>
                <textarea name="content" value={note.content} onChange={handleChange} placeholder='Start your writing...' className='contentArea' />
            </div>
            <button className='submitBtn' onClick={submitNote}>Submit</button>
        </div>
    )
}

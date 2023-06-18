import React, { useState } from 'react'
import Topbar from '../components/topbar/Topbar'
import MediaCard from '../components/cards/Card';
import './Global.css'

export default function Feeds() {

    const [topic, setTopic] = useState("Treding")

    function handleChange(event) {
        console.log(event.target.value)
        setTopic(event.target.value)
    }

    return (
        <div>
            <Topbar />
            <div className='alignLeft'>
                <h1>News Feed</h1>
                <div>
                    <select
                        value={topic}
                        onChange={handleChange}
                        className='selectOption marTop'>
                        <option>Select an option</option>
                        <option>Trending</option>
                        <option>Important</option>
                        <option>Everyday</option>
                        <option>Money</option>
                        <option>opportunities</option>
                    </select>
                </div>
            </div>
            <div className='temp'>
                <MediaCard name={topic} />
                <MediaCard name={topic} />
                <MediaCard name={topic} />
            </div>
        </div>
    )
}

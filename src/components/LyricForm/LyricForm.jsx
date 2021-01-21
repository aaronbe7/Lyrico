import { PromiseProvider } from 'mongoose';
import React, {useState} from 'react';

export default function LyricsForm({props}){
    const [songObj, setSongObj] = useState({
        songTitle: '',
        songArtist: ''
    })

    const handleSubmit= e => {
        e.preventDefault();
        props.handleSubmit(songObj)
        setSongObj('')
    }

    const handleChange = e => {
        const songInfo =  e.target.value
        setSongObj(songInfo)
      };

    return (
       <>
        <form onSubmit={handleSubmit}>
       <h4>Search for Lyrics</h4>
            <div>
              <input
                type="title"
                name="title"
                placeholder="Song Title"
                value={ songObj.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="title"
                name="title"
                placeholder="Song Artist"
                value={ songObj.artist}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn"
            >
              Search
            </button>
        </form>
       </>
    )
}
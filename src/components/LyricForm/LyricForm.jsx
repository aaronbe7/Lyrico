import React, {useState} from 'react';

export default function LyricsForm({props}){
    const [songObj, setSongObj] = useState({
        songTitle: '',
        songArtist: ''
    })

    const handleSubmit= e => {
        props.handleSubmit(songObj)
        setSongObj({
            songTitle: '',
            songArtist: '',
        })
    }

    const handleChange = e => {
        const title =  e.target.value
        const artist =  e.target.value
        setSongObj({
            songTitle: (title),
            songArtist: (artist),
        })
      };

    return (
       <>
        <form onSubmit={handleSubmit}>
       <h4>Search for Lyrics</h4>
            <div>
              <input
                type="artist"
                name="artist"
                placeholder="Song Artist"
                value={ songObj.songArtist}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="title"
                name="title"
                placeholder="Song Title"
                value={ songObj.songTitle}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
            >
              Search
            </button>
        </form>
       </>
    )
}
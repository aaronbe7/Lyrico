import React, {useState} from 'react';

export default function LyricForm(props){
    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')

    const handleSubmit= e => {
        e.preventDefault();
        console.log('this is props', props)
        console.log('handleSubmit clicked');
        props.handleSubmit({songTitle, songArtist})
        setSongTitle(songTitle)
        setSongArtist(songArtist)
    };

    const handleChange = e => {
        console.log('handleChange clicked');
        if (e.target.name === 'artist' ) {
            setSongArtist(e.target.value)
        } else if (e.target.name === 'title') {
            setSongTitle(e.target.value)
        }
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
                value={songArtist}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="title"
                name="title"
                placeholder="Song Title"
                value={songTitle}
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
import React, {useState} from 'react';
import { Card, Button } from 'semantic-ui-react'
import './SavedSong.css';

function SavedSong({song, removeSong, handleSubmit}) { 
    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')

    const handleSubmitter = async (e) => {
        e.preventDefault();
        handleSubmit({songTitle, songArtist})
        setSongTitle(song.title)
        setSongArtist(song.artist)
    };

    const clickHandler= e => {
        removeSong(song)
    };

  return (
    <Card>
      <Card.Content>
      <Card.Description onClick={handleSubmitter} key={song._id} className="card">
        {song.artist}
        <br />
        {song.title}
      </Card.Description>
      </Card.Content>
      <Button onClick={clickHandler}>
          X
      </Button>
    </Card>
  );
}

export default SavedSong;
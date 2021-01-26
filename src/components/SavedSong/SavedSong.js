import React, {useState} from 'react';
import { Card, Button } from 'semantic-ui-react'
import './SavedSong.css';

function SavedSong({song, removeSong, handleSubmit}) { 
    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')

    const handleSubmitter= e => {
        e.preventDefault();
        handleSubmit({songTitle, songArtist})
        setSongTitle(song.title)
        setSongArtist(song.artist)
    };

    const clickHandler= e => {
        removeSong(song)
    };

  return (
    <Card onClick={handleSubmitter} key={song._id} >
      <Card.Content>
      <Card.Description className="card">
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
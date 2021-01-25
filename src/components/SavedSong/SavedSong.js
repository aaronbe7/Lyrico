import React from 'react';
import { Card, Button } from 'semantic-ui-react'

function SavedSong({song, removeSong}) { 

    const clickHandler= e => {
        removeSong(song)
    };

  return (
    <Card key={song._id} centered>
      <Card.Content>
      <Card.Description>
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
import React from 'react';
import { Card, Form, Button, Icon, Image, Feed } from 'semantic-ui-react'

function SavedSong({song, removeSong }) { 

    const handleSubmit= e => {
    };

  return (
    <Card key={song._id} centered>
      <Card.Content>
      <Card.Description>
        {song.artist}
        <br />
        {song.title}
      </Card.Description>
      <br />
      <Form onSubmit={handleSubmit}>
      <Button type="submit">
          X
      </Button>
      </Form>
      </Card.Content>
    </Card>
  );
}

export default SavedSong;
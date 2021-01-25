import React, {useState} from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react'

export default function SaveSongForm(props){
    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')

    const handleChange = e => {
        if (e.target.name === 'artist' ) {
            setSongArtist(e.target.value)
        } else if (e.target.name === 'title') {
            setSongTitle(e.target.value)
        }
      };

    const handleSubmit= e => {
        e.preventDefault();
        props.handleSaveSong({songTitle, songArtist}); // calling our function!
    };


    return (
       <>
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h3' color='violet' textAlign='center'>
            Save Song
            </Header>
        <Form onSubmit={handleSubmit}>
            <div>
              <Form.Input
                type="artist"
                name="artist"
                placeholder="Song Artist"
                value={songArtist}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Form.Input
                type="title"
                name="title"
                placeholder="Song Title"
                value={songTitle}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <Button
              type="submit"
            >
              Save
            </Button>
        </Form>
        </Grid.Column>
        </Grid>
       </>
    )
}
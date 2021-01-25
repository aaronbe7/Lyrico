import React, {useState} from 'react';
import { Button, Form, Grid, Header } from 'semantic-ui-react'

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
       <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h3' color='violet' textAlign='center'>
            Search For Lyrics
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
              Search
            </Button>
        </Form>
        </Grid.Column>
          </Grid>
       </>
    )
}
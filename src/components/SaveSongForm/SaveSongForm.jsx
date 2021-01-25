import React, {useState} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

export default function SaveSongForm(props){
    const [state, setState] = useState({
        title: '',
        artist: '',
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
          })
      };

    const handleSubmit= e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('title', state.title)
        formData.append('title', state.artist)
        props.handleSaveSong(formData)
    };


    return (
       <Segment>
        <Form onSubmit={handleSubmit}>
       <h4>Save Lyrics</h4>
            <div>
              <Form.Input
                type="artist"
                name="artist"
                placeholder="Song Artist"
                value={state.artist}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Form.Input
                type="title"
                name="title"
                placeholder="Song Title"
                value={state.title}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
            >
              Save
            </Button>
        </Form>
       </Segment>
    )
}
import React from 'react';
import { Card  } from 'semantic-ui-react'
import SavedSong from '../SavedSong/SavedSong';

export default function SongFeed({songs, user, numCol, removeSong, handleSubmit}){

    return (
        <Card.Group itemsPerRow={numCol} >
                {songs.map((song) => {
                return ( 
                        <SavedSong song={song} key={song._id} user={user} removeSong={removeSong} handleSubmit={handleSubmit}/>
                    )
                })}
        </Card.Group>
    )
}
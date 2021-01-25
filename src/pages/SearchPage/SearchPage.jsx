import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Header/Header';
import PageLyrics from '../../components/Lyrics/Lyrics';
import LyricForm from '../../components/LyricForm/LyricForm';
import {  Grid, GridRow } from 'semantic-ui-react';

export default function SearchPage({user, handleLogout}){  
  const [songLyrics, setSongLyrics] = useState('');
  const [songTitle, setSongTitle] = useState('')
  const [songArtist, setSongArtist] = useState('')

  const handleSubmit = ({songTitle, songArtist}) => {
    console.log('hitting searchpage handlesubmit', songTitle, songArtist)
    setSongTitle(songTitle);
    setSongArtist(songArtist);
  }

  useEffect(() => {
    const songUrl = `https://private-anon-3bd572acf7-lyricsovh.apiary-proxy.com/v1/${songArtist}/${songTitle}`;
    fetch(songUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setSongLyrics(data);
    })
  }, [songTitle, songArtist]);

    return ( 
        <Grid >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column >
            <Grid.Row>
              {songArtist}
              <br />
              {songTitle}
            </Grid.Row>
            <Grid.Row>
            <LyricForm handleSubmit={handleSubmit}/>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <PageLyrics song={songLyrics}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}
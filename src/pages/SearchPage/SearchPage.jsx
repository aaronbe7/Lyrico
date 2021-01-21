import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Header/Header';
import PageLyrics from '../../components/Lyrics/Lyrics';
import LyricsForm from '../../components/LyricForm/LyricForm';
import {  Grid } from 'semantic-ui-react';

export default function SearchPage({user, handleLogout}){  
  const [songLyrics, setSongLyrics] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');

  const handleSubmit = (title, artist) => {
    setSongTitle(title);
    setSongArtist(artist);
  }

  useEffect(() => {
    const songUrl = `https://private-anon-3bd572acf7-lyricsovh.apiary-proxy.com/v1/${songArtist}/${songTitle}`
    fetch(songUrl)
    .then((res) => res.json())
    .then((data) => {
      setSongLyrics(data);
    })
  });

    return ( 
        <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
            <LyricsForm handleSubmit={handleSubmit}/>
          <Grid.Column>
            <PageLyrics song={songLyrics}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}
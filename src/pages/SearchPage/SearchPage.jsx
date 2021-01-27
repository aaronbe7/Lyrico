import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Header/Header';
import PageLyrics from '../../components/Lyrics/Lyrics';
import LyricForm from '../../components/LyricForm/LyricForm';
import {  Grid, Segment } from 'semantic-ui-react';
import './SearchPage.css';

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
        <Grid.Row centered className="songInfo">
            { songTitle ? <h1> {songArtist}: "{songTitle}" </h1> : null}
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
            <Grid.Row className="songForm">
            <LyricForm handleSubmit={handleSubmit}/>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column style={{ maxWidth: 700 }}>
          {songLyrics ? <Segment>
            <PageLyrics song={songLyrics}/>
          </Segment> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}
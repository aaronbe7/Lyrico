import React from 'react';
import PageHeader from '../../components/Header/Header';
import PageLyrics from '../../components/Lyrics/Lyrics';
import LyricsForm from '../../components/LyricForm/LyricForm';
import {  Grid } from 'semantic-ui-react';

export default function SearchPage({user, handleLogout}){  

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
            <LyricsForm />
          <Grid.Column>
            <PageLyrics />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}
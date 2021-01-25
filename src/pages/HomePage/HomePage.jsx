import React from 'react';
import PageHeader from '../../components/Header/Header';
import {  Grid } from 'semantic-ui-react';
import './HomePage.css';

export default function HomePage({ user, handleLogout }){  

  return ( 
    <div className="background">
        <Grid >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} className="homePage">
          <Grid.Column width={12}>
          <h2 className="welcome1">Welcome to Lyrico.</h2>
          <h2 className="welcome2">Search our extensive library of songs and save your favorite lyrics.</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
}
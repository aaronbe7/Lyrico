import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import SongFeed from '../../components/SongFeed/SongFeed'
import SaveSongForm from '../../components/SaveSongForm/SaveSongForm'
import {  Grid } from 'semantic-ui-react';
import userService from '../../utils/userService';
import * as songsAPI from '../../utils/songService';
import { useLocation } from 'react-router-dom';

export default function LibraryPage({ user, handleLogout }){

    const [libUser, setLibUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [songs, setSongs] = useState([])

    const location = useLocation();

    async function getLibrary(){
        try {
            const username = location.pathname.substring(1)
            console.log(username)

            const data = await userService.getLibrary(user.username);
            setLoading(() => false)
            setSongs(() => [...data.songs])
            setLibUser(() => setLibUser(data.user))
        } catch(err){
            setError(err)
        }
    }

    async function handleSaveSong (song){
        const data = await songsAPI.create(song);
        setSongs([...songs, data.song])
      }

    async function getSongs(){
    try {
        const data = await songsAPI.getAll();
        setSongs([...data.songs])
    } catch(err){
        console.log(err, ' this is the error')
    }
    }

    async function removeSong(song){
        try {
            await songsAPI.removeSong(song);
            getSongs()
        } catch(err) {
        console.log(err)
        }
    }

    useEffect(() => {
        getSongs()
        getLibrary()
    }, [])


    return ( 
        <>
        { loading ?
            <h1>Loading......</h1>
            :
                <Grid >
                <Grid.Row>
                <Grid.Column>
                    <PageHeader user={user} handleLogout={handleLogout} />
                </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width={6}>
                        <Grid.Row >
                            <SaveSongForm handleSaveSong={handleSaveSong}/>
                        </Grid.Row>
                        <Grid.Row >
                            <SongFeed songs={songs} numCol={2} user={user} removeSong={removeSong}/>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
            }
        </>
    )
}
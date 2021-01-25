import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import SongFeed from '../../components/SongFeed/SongFeed'
import SaveSongForm from '../../components/SaveSongForm/SaveSongForm'
import {  Grid } from 'semantic-ui-react';
import userService from '../../utils/userService';
import { useLocation } from 'react-router-dom';

export default function LibraryPage({ user, handleLogout }){

    const [libUser, setLibUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const location = useLocation();

    async function getLibrary(){
        try {
            const username = location.pathname.substring(1)
            console.log(username)

            const data = await userService.getLibrary(user.username);
            setLoading(() => false)
            setLibUser(() => setLibUser(data.user))
        } catch(err){
            setError(err)
        }
    }
    
    useEffect(() => {
        getLibrary()
    }, [])


    return ( 
        <>
        { loading ?
            <h1>Loading......</h1>
            :
                <Grid>
                <Grid.Row>
                <Grid.Column>
                    <PageHeader user={user} handleLogout={handleLogout} />
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Grid.Row >
                            <SaveSongForm />
                        </Grid.Row>
                        <Grid.Row>
                            <SongFeed />
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
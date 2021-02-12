import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import SongFeed from '../../components/SongFeed/SongFeed'
import SaveSongForm from '../../components/SaveSongForm/SaveSongForm'
import PageLyrics from '../../components/Lyrics/Lyrics';
import {  Grid, Segment } from 'semantic-ui-react';
import userService from '../../utils/userService';
import * as songsAPI from '../../utils/songService';
import { useLocation } from 'react-router-dom';

export default function LibraryPage({ user, handleLogout }){

    const [libUser, setLibUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [songs, setSongs] = useState([])
    const [songLyrics, setSongLyrics] = useState('');
    const [songTitle, setSongTitle] = useState('')
    const [songArtist, setSongArtist] = useState('')

    const handleSubmit = ({songTitle, songArtist}) => {
        console.log('hitting searchpage handlesubmit', songTitle, songArtist)
        setSongTitle(songTitle);
        setSongArtist(songArtist);
    }

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

    async function removeSong(song){
        try {
            await songsAPI.removeSong(song);
            const data = await userService.getLibrary(user.username);
            setSongs(() => [...data.songs])
        } catch(err) {
        console.log(err)
        }
    }

    useEffect(() => {
        getLibrary()
    }, [])

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
        <>
            <Grid >
            <Grid.Row>
            <Grid.Column>
                <PageHeader user={user} handleLogout={handleLogout} />
            </Grid.Column>
            </Grid.Row>
            <Grid.Row centered className="songInfo">
            { songTitle ? <h1> {songArtist}: "{songTitle}" </h1> : null}
            </Grid.Row>
            <Grid.Row centered columns={2}>
                <Grid.Column width={6}>
                    <Grid.Row >
                        <SaveSongForm handleSaveSong={handleSaveSong}/>
                    </Grid.Row>
                    <Grid.Row >
                        <SongFeed songs={songs} numCol={2} user={user} removeSong={removeSong} handleSubmit={handleSubmit}/>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column style={{ maxWidth: 700 }}>
                        {songLyrics ? <Segment>
                        <PageLyrics song={songLyrics}/>
                        </Segment> : null}
                </Grid.Column>
            </Grid.Row>
            </Grid>
        </>
    )
}
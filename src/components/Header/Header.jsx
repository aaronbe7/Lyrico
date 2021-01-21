import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';


export default function PageHeader({user, handleLogout}){
    console.log(user)
    return (
        <Segment clearing>
            <Header as='h2' floated='right'>
                <Link to={`/user/${user.username}`}>Library</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/search' >Search</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='' onClick={handleLogout}>Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
            <Link to=''>Home</Link>
            </Header>
        </Segment>
    )
}
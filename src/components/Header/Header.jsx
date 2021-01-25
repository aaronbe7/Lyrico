import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { Header, Segment, Icon } from 'semantic-ui-react';


export default function PageHeader({user, handleLogout}){
    console.log(user)
    return (
        <Segment className="segment" clearing>
            <Header as='h3' floated='right'>
                <Link to={`/user/${user.username}`} className="link">Library</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/search' className="link">Search</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='' onClick={handleLogout} className="link">Logout</Link>
            </Header>
            <Header as='h3' color="violet" floated='left'>
            <Link to='' className="link">Lyrico</Link>
            </Header>
        </Segment>
    )
}


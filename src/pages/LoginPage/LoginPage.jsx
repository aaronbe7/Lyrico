import React, { useState, useRef, useEffect } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useForm } from '../../hooks/useForm';
import { useHistory, Link } from 'react-router-dom';
import userService from '../../utils/userService';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

export default function LoginPage(props){
    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ]          = useState('')
    const [state, handleChange]       = useForm({
        email: '',
        pw: '',
    })
  
    const history = useHistory();
    const formRef = useRef();

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='violet' textAlign='center'>
            Login
            </Header>
          <Form  autoComplete="off" ref={formRef} onSubmit={async (e) => {
            e.preventDefault()
            
            try {
                await userService.login(state);
                
                props.handleSignUpOrLogin()
                history.push('/')
                alert("Logged in, time to go code where you want to go now! ~ Login Component!")
              } catch (err) {
                // Invalid user data (probably duplicate email)
                setError(err.message)
              }
          }}>
            <Segment >
            <div className="form-group">
              <Form.Input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={ state.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <Form.Input
                className="form-control"
                name="pw"
                type="password"
                placeholder="Password"
                value={ state.password}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <Button
              type="submit"
              className="btn"
              disabled={invalidForm}
              color='violet'
            >
              Login
            </Button>
            </Segment>
          </Form>
          <Message>
              New here? <Link to='/signup'>Sign Up</Link>
            </Message>
          {error ? <ErrorMessage error={error} /> : null}
          </Grid.Column>
          </Grid>
        </>
      );
}


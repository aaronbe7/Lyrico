import React, {useState, useRef } from 'react';
import './SignupPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useForm } from '../../hooks/useForm';
import { useHistory, Link } from 'react-router-dom';
import userService from '../../utils/userService';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

export default function SignUpPage(props){
    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ]          = useState('')
    const [state, handleChange]       = useForm({
        username: '',
        email: '',
        password: '',
        passwordConf: ''    
    })
   
    const history = useHistory();
    const formRef = useRef();


    return (
        <>
         <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='violet' textAlign='center'>
            Sign Up
            </Header>
          <Form  autoComplete="off" ref={formRef} onSubmit={async (e) => {
            e.preventDefault()
            try {
                await userService.signup(state);
                // Route to wherever you want!
                props.handleSignUpOrLogin()
                history.push('/')
                alert("You're logged in! Time to Code where you want to go Now! ~ SignupComponent")
              } catch (err) {
                // Invalid user data (probably duplicate email)
                console.log(err.message)
                setError(err.message)
              }
          }}>
            <Segment>
            <div className="form-group">
              <input
                className="form-control"
                name="username"
                placeholder="username"
                value={state.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email"
                value={ state.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="password"
                value={ state.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={ state.passwordConf}
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
              Signup
            </Button>
            </Segment>
          </Form>
          <Message>
              Have an account? <Link to='/login'>Login</Link>
            </Message>
          {error ? <ErrorMessage error={error} /> : null}
          </Grid.Column>
          </Grid>
        </>
      );
}

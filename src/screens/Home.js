import React, {useState, useContext, useEffect}from 'react'
import { Container } from "@material-ui/core";
import { auth_url } from '../api/GitHub';
import { UserContext } from '../context';

function Home() {
  const usrCtx = useContext(UserContext)
  return (
    <div>
      <Container maxWidth="sm">
        <div className="container">
          <div className="jumbotron text-center text-primary">
            <h1><span className="fa fa-github"></span> Coder profile</h1>
            <p>Authorize your app with:</p>
            <a href={auth_url} className="btn btn-danger"><span className="fa fa-github"></span> Github Login</a>
            <button className="btn btn-primary"><span className="fa fa-search"></span> Search profile</ button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
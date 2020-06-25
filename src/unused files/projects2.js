import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './project2.css';
import spotifypage from '../images/spotifypage.JPG';

function Mywork() {
  return (
    <>
    <Jumbotron className="bg-info text-light">
      <Container className="text-center">
        <h1 className='display-3'>My Work</h1>
        </Container>
    </Jumbotron>
    <Container>
      <a className="blue" href="https://github.com/RJKAZ/Concatenated-Cats"><img className='spotifypage'src={spotifypage}/></a>
      <h2>Spotify Lyric Player</h2>
    </Container>
    </>

  )
}

export default Mywork;


import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from '../images/profilepic.png';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src={profilepic}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Richard Kazanowski</h1>
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>HTML | CSS | Bootstrap | Javascript | NodeJS | Express | MySQL | MongoDB | React </p>

              <div className="social-links">
                {/* LinkdIn*/}
                <a href="https://linkedin.com/in/richard-kazanowski-a422a3193" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github*/}
                <a href="https://github.com/RJKAZ" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
                </a>
               
              </div>
              
            </div>
          </Cell>
        </Grid>
        
        </div>
    )
  }
}

export default Landing;
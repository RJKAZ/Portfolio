import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilepic from '../images/profilepic.png';



class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Richard Kazanowski</h2>
            <img
              src={profilepic}
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> Hi, my name is Richard Kazanowski. I was born and raised in the state of New Jersey, and I have a Bachelors Degree in Communications from Kean University, and recently decided to continue my education in the field of coding and computer science. I just completed a web development/coding course offered thruough Rutgers University and I have no intention to stop learning now that the course has finished. I've always been very tech savy and have always been well skilled with using and building computers, getting into the Programing side was a natural progression. My profesional experience is thus far primarilly in Customer Service and Mangagment in the Hospitality Field and as a personal assistant to a Real Estate broker. On a personal note I a a freelance illustrator and well skilled with the creation of digital art, illustrations, and graphics. </p>
          </Cell>
          <Cell col={6}>
            <h2> Contact Me</h2>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  (732)-713-2651
                </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  rjkaz@comcast.net
                </ListItemContent>
              </ListItem>

              <ListItem>
              
              </ListItem>
            </List>

            </div>
            

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
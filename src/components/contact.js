import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { Container, ButtonGroup, Button, Image } from 'react-bootstrap';
import profilepic from '../images/profilepic.png';
import resumePdf from '../assets/2020resume.pdf';



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
            <h3 style={{ width: '100%', margin: 'auto', fontFamily: 'bookantiqua', paddingTop: '1em' }}>Hello, and thank you for checking out my portfolio page! </h3>
            <br/>
            <h4 style={{ width: '100%', margin: 'auto', fontFamily: 'bookantiqua', paddingTop: '1em' }}> My name is Richard Kazanowski, but you can call me RJ. I’m a junior web developer freshly versed in the MERN Stack. My main focus is front end development and design, but I can also back that up with a backend if needed. I have a firm grasp on HTML, CSS, Javascript, Jquery, Node.js, React, Handlebars, Express, MongoDB, & MySQL, and I am constantly striving to improve my skills and learn new ones. Presently I am in the process of learning Three.js, Love2D, and Python to expand my skills set. I am also a hobbyist/freelance illustrator and very skilled in the use of raster graphic programs such as Photoshop. In my free time I enjoy drawing on my Wacom Tablet, watching Netflix, drinking an insane amount of coffee, and planning some crazy vacation itineraries.  </h4>
            <br/>
            <br/>

          </Cell>
          <Cell col={6}>
            <h2> Contact Me</h2>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px', fontFamily: 'bookantiqua'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  (732)-713-2651
                </ListItemContent>
              </ListItem>
              
              <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'bookantiqua'}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  rjkaz@comcast.net
                </ListItemContent>
              </ListItem>
              <br/>
              <hr/>
              
             
              <h2> Check Out my Resume!</h2>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'calluna'}}>
                <i className="fa fa-file" aria-hidden="true"/>
              <Button href={resumePdf} target='_blank' rel="noopener noreferrer" className='cusBtn'> 
                resume.pdf
            </Button>
            </ListItemContent>



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
import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profilepic from '../images/profilepic.png';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src={profilepic}
              alt="avatar"
              style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Richard Kazanowski</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid blue', width: '100%'}}/>
            <p>Front End Web Developer, specializing in creating custom graphics and artwork. I am also skilled on the backend and can create a full stack app. </p>
            <hr style={{borderTop: '3px solid blue', width: '100%'}}/>
            <h5>Address</h5>
            <p> 219 East Lane Clark, NJ, 07066</p>
            <h5>Phone</h5>
            <p>(732) 713-2651</p>
            <h5>Email</h5>
            <p>rjkaz@comcast.net</p>
            <hr style={{borderTop: '3px solid blue', width: '100%'}}/>
            </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="Kean University"
              schoolDescription = "Bachelor in Communications" 
            />
            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Rutgers University Continuing Education"
              schoolDescription = "Coding Bootcamp for Web Development" 
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Experience</h2>

            <Experience
              startYear={2000}
              endYear={2014}
              jobName="Assistant Front Office Manager"
              jobDescription="Holiday Inn Clark NJ"
            />
            <Experience
              startYear={2014}
              endYear={2020}
              jobName="Personal Assistant"
              jobDescription="All Towne Reality"
            />
             <hr style={{borderTop: '3px solid #e22947'}}/>
             <h2>Skills</h2>
             <h4>Coding proficiency in HTML, CSS, Javascript, NodeJS, Express, MySql, MongoDB, and React.</h4>
             <h4>Graphic proficiency in Photoshop, Illustrator, Clip Studio Paint, and well skilled with a Wacom tablet.</h4>
             
             

          </Cell>
        </Grid>

      </div>
    )
  }
}


/*
<Skills
             skill="HTML"
             progress={100}
             />
             <Skills
             skill="HTML"
             progress={100}
             />
             <Skills
             skill="CSS"
             progress={90}
             />
             <Skills
             skill="Javascript"
             progress={50}
             />
             <Skills
             skill="React"
             progress={60}
             />
             <Skills
             skill="NodeJS"
             progress={30}
             />
              <Skills
             skill="Photoshop"
             progress={100}
             />
*/


export default Resume;
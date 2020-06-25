import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton, CardImg } from 'react-mdl';
import spotify from "../images/spotifypage.JPG";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
      
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', }}> Spotify Lyric Player</CardTitle>
          <CardText>
          Music streaming app that utilizes Spotify's API and Web Playback SDK as well as Lyrics.OVH API to allow Spotify Premium subscribers to view the lyrics of the currently playing track.
            </CardText> 
            <CardActions border>
            <Button a href="https://github.com/RJKAZ/Concatenated-Cats" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
              <Button a href="https://rjkaz.github.io/Concatenated-Cats/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
        
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', }}> Demo Shopping Site</CardTitle>
          <CardText>
            A concept site on an on-line shopping boutique. In its current state its more of a Fashion Satire in reponse to the Covid 19 pandemic. But the code and template could easily apply to an actual shopping site.
            </CardText> 
            <CardActions border>
              <Button a href="https://github.com/RJKAZ/The-Contagion-Boutique" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
              <Button a href="https://the-contagion-boutique.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
    
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', }}> Visual Novel</CardTitle>
          <CardText>
          A React based Visual Novel that starts with a story, and proceeds into a short 3-question quiz component, you're answers determine one of four possible endings you can reach.
            </CardText> 
            <CardActions border>
            <Button a href="https://github.com/RJKAZ/the-interview" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            <Button a href="https://calm-stream-65291.herokuapp.com/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
        
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px',}}> Web Comic Template Site</CardTitle>
          <CardText>
            This webpage is a work in progress template to house an active or achived webcomic. 
            </CardText> 
            <CardActions border>
            <Button a href="https://github.com/RJKAZ/TheLeprecon" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
            <Button a href="https://rjkaz.github.io/TheLeprecon/" rel="noopener noreferrer" target="_blank" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
        </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is for works in progress</h1></div>
      )
   
  }
}

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Works in Progress</Tab>
        </Tabs>

        
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          
        

      </div>
    )
  }
}

export default Projects;
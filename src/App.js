import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

//import bootstrap styleshhet for all pages
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontsize: "30px" }} to="/">My Portfolio</Link>} scroll>
            <Navigation>
               {/*} <Link to="/resume">Resume</Link>*/}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact / Resume</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black' }} to="/">My Portfolio</Link>}>
            <Navigation>
                {/*<Link to="/resume">Resume</Link>*/}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact / Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;

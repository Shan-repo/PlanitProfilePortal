import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content,Footer,FooterSection,FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'react-mdl/extra/material.css';
import  'react-mdl/extra/material.js';

function App() {
  const history = useHistory();
  const getResume = () => history.push('/');
  return (
    
    <div className="demo-big-content">
    <Layout >
        <Header className="header-color" title="Planit Profiles" scroll onClick={getResume}>
            {/* <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation> */}
        </Header>
        <Drawer title="Planit Profiles">
            <Navigation>
            <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div/>
            <Main></Main>
        </Content>
        <Footer size="mini">
        <div style={{float: 'left'}}><img src="https://cdn.planittesting.com/planit/media/siteimages/components/planit-logo-140.png" width="50" alt ="logo" /></div>
          <FooterSection type="right">
              <FooterLinkList>
                  <Link to="/contact">Contact</Link>
                  <a href="/contact">Help</a>
                  <a href="/contact">Privacy & Terms</a>
              </FooterLinkList>
          </FooterSection>
      </Footer>
    </Layout>
</div>

  );
}

export default App;



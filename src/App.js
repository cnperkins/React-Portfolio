import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Footer, FooterSection, FooterLinkList, Content, Drawer } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>

        <Header className="header-color" title="Chloe Perkins" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Header>

        <Drawer title="Chloe Perkins">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Drawer>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      <div>
        <Footer className="footer" size="mini">
          <FooterSection type="bottom" logo="">
            <FooterLinkList>
            <a href="mailto:cnpolansky@gmail.com">cnpolansky@gmail.com</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
        </div>
      </Layout>
    </div>
  );
}

export default App;

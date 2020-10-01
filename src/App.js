import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import './components/Main.js'
function App() {
  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#000000' }}></span><strong>My Personal Website</strong></span>}>
          <Navigation>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </Navigation>
        </Header>
        <Content >

        </Content>
      </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PageSearchResult from './pages/page-search-result';
import PageArtist from './pages/page-artist'
import PageHome from './pages/page-home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/busqueda" component={PageSearchResult}/>
          <Route exact path="/artista" component={PageArtist} />
          <Route path="/" component={PageHome}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

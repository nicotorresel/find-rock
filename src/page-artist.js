import React from 'react';
import SearchBar from './components/search-bar';
import SimilarArtist from './components/similar-artist';
import './page-artist.css';

class PageSearchResult extends React.Component {

  state = {
    busqueda: ''
  }

  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar 
          onChange={this.changeHandle} 
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img src="https://loff.it/wp-content/uploads/2014/09/loffit_adios-gustavo-cerati_03.jpg"
              alt="cerati"
              className="pic-artist margenes50"
              />
              <h2>Gustavo Cerati</h2>
              <p>​ 
                 fue un músico, cantautor, compositor y productor discográfico argentino que
                 obtuvo reconocimiento internacional por haber sido el líder de la banda de rock
                 Soda Stereo. Es considerado uno de los músicos más importantes, populares e
                 influyentes del rock latinoamericano.
              </p>
            </div>
          </div>
            <SimilarArtist />
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;

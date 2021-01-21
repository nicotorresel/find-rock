import React from 'react';
import ArtistCard from './/artist-card';
import Loading from './loading';
import Error from './error';
import 'bootstrap/dist/css/bootstrap.css';

class SearchResult extends React.Component{

  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist:[]
      }
    }
  };

  componentWillReceiveProps(e){
    let termino = e.busqueda;
    this.fetchData(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${termino}&api_key=65bd337131a93bd0f0550b29526413ef&format=json`
    );
  }

  fetchData = async url =>{
    this.setState({
      loading: true
    });

    const response = await fetch(url);
    const data = await response.json();
    if (data.error){
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && < Error errorMensaje={this.state.errorMensaje}/>}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artista, i)=>{
              return (
                <ArtistCard 
                  img={artista.image[2]["#text"]} 
                  titulo={artista.name} 
                  alt={artista.name} key={i}
                />
              )
            })}
    
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;

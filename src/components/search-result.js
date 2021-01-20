import React from 'react';
import ArtistCard from './/artist-card';
import Loading from './loading';
import 'bootstrap/dist/css/bootstrap.css';

class SearchResult extends React.Component{

  state = {
    loading: false,
    data: {
      similarartists: {
        artist:[]
      }
    }
  };

  componentDidMount() {
    this.fetchData(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=madona&api_key=65bd337131a93bd0f0550b29526413ef&format=json'
    );
  }

  fetchData = async url =>{
    this.setState({
      loading: true
    });

    const response = await fetch(url);
    const data = await response.json();
    console.log(data, 'lo que trae la api');
    this.setState({
      loading: false,
      data: data
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
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
            <h1>{this.props.busqueda}</h1> 
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;

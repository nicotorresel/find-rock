import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SearchResult extends React.Component{

  state = {
    data: ""
  };

  componentDidMount() {
    this.fetchData(
      'http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=korn&api_key=65bd337131a93bd0f0550b29526413ef&format=json'
    );
  }

  fetchData = async url =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, 'lo que trae la api');
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {/* {this.state.artist.map((artista, i)=>{
              return <ArtistCard img={artista.image} titulo={artista.name} alt={artista.name} key={i}/>
            })} */}
            <h1>{this.props.busqueda}</h1> 
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;

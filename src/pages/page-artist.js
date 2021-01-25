import React from 'react';
import Logo from '../../src/logo.svg';
import {Link} from 'react-router-dom';
import SimilarArtist from '../components/similar-artist';
import Loading from '../components/loading';
import Error from '../components/error';
import './page-artist.css';

class PageSearchResult extends React.Component {

  state = {
    data: {
      artist: {
        image: [
          {"#text":""},
          {"#text":""},
          {"#text":""},
          {"#text":""},
          {"#text":""}
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                {"#text":""},
                {"#text":""},
                {"#text":""},
                {"#text":""},
                {"#text":""}
              ]
            }
          ]
        }
      }
    }
  };

  componentDidUpdate(prevProps){
    if (this.props.location !== prevProps.location){
      this.fetchData();
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () =>{
    let artista = this.props.history.location.search.substr(1);
    let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artista}&api_key=65bd337131a93bd0f0550b29526413ef&format=json`;

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

        <div className="col-md-2 logo-artista">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-barra" />
          </Link>
        </div>

        {this.state.loading && <Loading />}
        {this.state.error && < Error errorMensaje={this.state.errorMensaje}/>}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img src={this.state.data.artist.image[2]["#text"]}
              alt="cerati"
              className="pic-artist margenes50"
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>​{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <SimilarArtist data={this.state.data.artist.similar.artist} />
        </div>

      </React.Fragment>
    );
  }
}

export default PageSearchResult;

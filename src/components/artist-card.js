import React from 'react';
import { Link } from 'react-router-dom';
import './artist-card.css';

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <Link to={`/artista?${this.props.titulo}`}>
          <div className="item">
            <img className="pic" src={this.props.img} alt={this.props.alt}/>
            <p className="titulo">{this.props.titulo}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
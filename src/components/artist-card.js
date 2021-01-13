import React from 'react';
import './artist-card.css';

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <img className="pic" src={this.props.img} alt={this.props.alt}/>
          <p className="titulo">{this.props.titulo}</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
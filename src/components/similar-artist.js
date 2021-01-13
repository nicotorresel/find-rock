import React from 'react';
import ArtistCard from './artist-card.js';

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Similar Artists</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ArtistCard img="https://placehold.it/350x350" titulo="Test Loco" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://placehold.it/350x350" titulo="Test Loco" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://placehold.it/350x350" titulo="Test Loco" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="https://placehold.it/350x350" titulo="Test Loco" />            
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SimilarArtist;
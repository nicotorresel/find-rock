import React from 'react';
import './page-home.css';
import logo from './logo.svg';

class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row" className="centrado">
          <div className="col-md-6" className="centrar">
            <img src={logo} alt="logo" id="logo" />
            <form onSubmit={this.handleSubmit} className="form">
                  <div className="busqueda"> 
                    <input 
                      name="busqueda"
                      type="text"
                      id="buscar"
                      value={this.props.busqueda}
                      placeholder="Buscá una banda"
                      onChange={this.props.onChange}
                    />
                  </div>
                  <div className="actions">
                    <button className="btng">Search Similar Artist</button>
                    <button className="btng">Escuela devRock</button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
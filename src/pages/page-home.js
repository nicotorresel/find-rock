import React from 'react';
import './page-home.css';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class PageHome extends React.Component {

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.history.push(`/busqueda?${this.state.busqueda}`);
  };
  handleChange = (e) =>{
    this.setState({
      busqueda: e.target.value
    });
  }

  state = {
    busqueda: ''
  }

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6" >
            <div className="centrar">
            <img src={logo} alt="logo" id="logo" />
            </div>
            <form onSubmit={this.handleSubmit} className="form">
              <div className="busqueda"> 
                <input 
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Buscá una banda"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">Search Similar Artist</button>
                <button className="btng">Nicolas Torresel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
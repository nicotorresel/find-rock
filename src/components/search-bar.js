import React from 'react';
import "./search-bar.css";
import Logo from '../../src/logo.svg';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

  state = {
    busqueda : ""
  };

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value});
  //   console.log("Soy el input: ", e.target.value);
  // }

  render(){
    return(
      <React.Fragment>
            <div className="contenedor">
              <div className="col-md-2 logo-barra">
                <Link to="/">
                  <img src={Logo} alt="Logo" className="logo-barra" />
                </Link>
              </div>
              <div className="col-md-4">
                <form onSubmit={this.handleSubmit}>
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
                </form>
              </div>
            </div>
            <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
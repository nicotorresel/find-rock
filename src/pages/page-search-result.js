import React from 'react';
import SearchBar from '../components/search-bar';
import SearchResult from '../components/search-result';

class PageSearchResult extends React.Component {

  state = {};

  componentWillMount() {
    console.log('antes del metodo render');
  }

  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar 
          onChange={this.changeHandle} 
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda}/>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;

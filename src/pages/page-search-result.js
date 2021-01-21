import React from 'react';
import SearchBar from '../components/search-bar';
import SearchResult from '../components/search-result';

class PageSearchResult extends React.Component {

  state = {};
  componentDidMount() {
    let search = this.props.history.location.search.substr(1);
    this.setState({
      busqueda: search
    })
  };

  componentWillMount() {}

  handleChange = e => {
    this.setState({
      busqueda: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar 
          onChange={this.handleChange} 
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda}/>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;

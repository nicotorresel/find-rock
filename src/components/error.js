import React from 'react';
import './loading.css';

const Error = (props) => {
  return(
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12">
          <h3>Error{props.errorMensaje}</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
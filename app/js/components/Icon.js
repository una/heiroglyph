'use strict';

import React from 'react';
import autobind from 'autobind-decorator';


@autobind
class Icon extends React.Component{

  render() {
    var details = this.props.details;

    return (
      <li className="icon">
        <h3 className="icon--name">
          {details.name}</h3>
        <img src={details.image} alt={details.name} />
      </li>
    )
  }

}

export default Icon;
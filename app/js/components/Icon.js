'use strict';

import React from 'react';

class Icon extends React.Component{

  render() {
    var details = this.props.details;

    return (
      <li className="icon">
        <h3 className="icon--name">
          {details.name}</h3>
        <img src={'images/icons/'+ details.image} alt={details.name} />
      </li>
    )
  }

}

export default Icon;
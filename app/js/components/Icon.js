'use strict';

import React from 'react';

class Icon extends React.Component{

  render() {
    var details = this.props.details;

    var iconStyle = {
      backgroundColor: details.color,
      WebkitMask: 'url("images/icons/' + details.image + '") no-repeat 50% 50%',
      Mask: 'url(' + details.image + ') no-repeat 50% 50%',
      width: '50px',
      height: '50px'
    };

    return (
      <li className="icon">
        <h3 className="icon--name">
          {details.name}</h3>
          <div style={iconStyle}></div>
          <p>{details.tags.join(', ')}</p>
      </li>
    )
  }

}

export default Icon;
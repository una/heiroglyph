'use strict';

import React from 'react';
import Icon from './Icon';
// import Firebase from 'firebase';
// const ref = new Firebase('https://catchoftheday-demo.firebaseio.com/');

class IconList extends React.Component{

  constructor(props) {
    super(props);
  }

  renderIcon = (key) => {
    return <Icon key={key} details={this.props.icons[key]}></Icon>
  }

  render() {
    console.log('this2', this);
    return (
      <div>
       <ul className="iconList">
          {Object.keys(this.props.icons).map(this.renderIcon)}
        </ul>
      </div>
    );
  }
}

export default IconList;
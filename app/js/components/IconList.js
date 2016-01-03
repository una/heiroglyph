'use strict';

import React from 'react';
import Icon from './Icon';
import autobind from 'autobind-decorator';
// import Firebase from 'firebase';
// const ref = new Firebase('https://catchoftheday-demo.firebaseio.com/');

@autobind
class IconList extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
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
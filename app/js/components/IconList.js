'use strict';

import React from 'react';
import autobind from 'autobind-decorator';
import Firebase from 'firebase';
const ref = new Firebase('https://catchoftheday-demo.firebaseio.com/');

@autobind
class IconList extends React.Component{

  constructor(props) {
    super(props);
  }

  renderIcon(key) {
    var linkState = this.props.linkState;

    return(
      <div className="icon" key={key}>
        <input type="text" valueLink={linkState('icon.'+ key +'.name')}/>
        <img src="../{linkState('icon.'+ key +'.image')}" alt=""/>
        <input type="text" valueLink={linkState('icon.'+ key +'.color')}/>
      </div>
    )
  }

  render() {
    return (
      <div>

        This is Just Going to be All of the Icons

      </div>
    );
  }

}

export default IconList;
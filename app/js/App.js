'use strict';

import React from 'react';
// import CurrentUserActions from './actions/CurrentUserActions';
// import CurrentUserStore from './stores/CurrentUserStore';
import Header from './components/Header';
import Footer from './components/Footer';
import IconList from './components/IconList';
import iconData from './data/iconListInfo';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      icons: iconData
    }
  }


  componentWillMount() {
    console.log('About to mount App');
  }

  render() {
    return (

      <div>

        <Header />

          <IconList icons={this.state.icons} />

        <Footer />

      </div>
    );
  }
}

// App.propTypes = propTypes;

export default App;
'use strict';

import React              from 'react';

import CurrentUserActions from './actions/CurrentUserActions';
import CurrentUserStore   from './stores/CurrentUserStore';
import Header             from './components/Header';
import Footer             from './components/Footer';
import IconList           from './components/IconList';

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onUserChange = this.onUserChange.bind(this);

    this.state = {
      currentUser: {}
    };
  }

  onUserChange(err, user) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({ currentUser: user || {}, error: null });
    }
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  componentDidMount() {
    this.unsubscribe = CurrentUserStore.listen(this.onUserChange);
    CurrentUserActions.checkLoginStatus();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
      currentUser: this.state.currentUser
    });
  }

  loadIcons(){
    this.setState({
      icons: require('./data/iconListInfo')
    })
  }

  render() {
    return (
      <div>

        <Header />

        {/* {this.renderChildren()} */}

        <IconList loadIcons={this.loadIcons} linkState={this.linkState.bind(this)}/>

        <Footer />

      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
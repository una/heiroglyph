'use strict';

import React from 'react';
import Catalyst from 'react-catalyst';
import autobind from 'autobind-decorator';
// import CurrentUserActions from './actions/CurrentUserActions';
// import CurrentUserStore from './stores/CurrentUserStore';
import reactMixin from 'react-mixin';
import Header from './components/Header';
import Footer from './components/Footer';
import IconList from './components/IconList';

// const propTypes = {
//   params: React.PropTypes.object,
//   query: React.PropTypes.object,
//   children: React.PropTypes.oneOfType([
//     React.PropTypes.array,
//     React.PropTypes.object
//   ])
// };

@autobind
class App extends React.Component {

  constructor(props) {
    super(props);

    // this.onUserChange = this.onUserChange.bind(this);

    this.state = {
      currentUser: {},
      icons: require('./data/iconListInfo')
    }
  }

  // onUserChange(err, user) {
  //   if ( err ) {
  //     this.setState({ error: err });
  //   } else {
  //     this.setState({ currentUser: user || {}, error: null });
  //   }
  // }

  componentWillMount() {
    console.log('About to mount App');
  }

  // componentDidMount() {
  //   this.unsubscribe = CurrentUserStore.listen(this.onUserChange);
  //   CurrentUserActions.checkLoginStatus();
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // renderChildren() {
  //   return React.cloneElement(this.props.children, {
  //     params: this.props.params,
  //     query: this.props.query,
  //     currentUser: this.state.currentUser
  //   });
  // }
  renderIcon(key) {
    return <Icon key={key} index={key} />
  }

  render() {
    return (

      <div>

        <Header />

        {/* {this.renderChildren()} */}

        <IconList renderIcon={this.renderIcon} details={this.state.icons[key]} />

        <Footer />

      </div>
    );
  }
}

reactMixin.onClass(App, Catalyst.LinkedStateMixin);
// App.propTypes = propTypes;

export default App;
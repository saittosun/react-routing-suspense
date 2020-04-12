import React, { Component, Suspense } from 'react';
// import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// // import Posts from './containers/Posts';
// import User from './containers/User';
// import Welcome from './containers/Welcome';

const Posts = React.lazy(() => {
  return import('./containers/Posts')
});

class App extends Component {
  state = {
    showPosts: false
  }

  modeHandler = () => {
    this.setState(prevState => {
      return {
        showPosts: !prevState.showPosts
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>  
        {this.state.showPosts && (
          <Suspense fallback={<div>Loading...</div>}>
            <Posts/>
          </Suspense>
        )}
      </React.Fragment>
    );
  }
}

export default App;

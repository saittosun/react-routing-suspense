import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => {
  return import('./containers/Posts')
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          {/* <Route path="/posts" component={Posts} /> */}
          <Route path="/posts" render={() => (
              // this will actually be displayed. In cases where re-act basically postpones the rendering of this wrap component and shows as well fallback in the meantime.
              <Suspense fallback={<div>Loading...</div>}>
                <Posts/>
              </Suspense>
            )}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

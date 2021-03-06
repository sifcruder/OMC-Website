import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import appRoutes from './router/routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <div style={{ minHeight: "630px" }}>
          <Switch>
            {
              appRoutes.map((obj, index) => {
                /*return <Route {...obj} key={index} />*/
                return <Route key={index} exact path={obj.path} component={obj.component} />
              })
            }
          </Switch>
        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;

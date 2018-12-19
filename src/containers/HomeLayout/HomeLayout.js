import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import { bindActionCreators } from 'redux';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

import Footer from './Footer';
import Header from './Header';

class App extends Component {

  componentDidMount(e) {
    // Check If Login
    //this.props.checkIfLogin(true);
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login');
  }

  checkIfLogin() {
    if(this.props.isLogin)
      this.props.history.push('/login');
  }

  render() {
    this.checkIfLogin();
    const { ...rest } = this.props
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <main className="main">

              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    const mprops = {...rest}
                    return (route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        mprops
                        render={props => (
                          <route.component {...props} {...mprops}/>
                        )} />
                    ) : (null));
                  }
                  )}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>

          </main>

        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    journaux: state.journaux,
    contreparties: state.contreparties,
    fournisseurs: state.fournisseurs,
    plancomptables: state.plancomptables,
    succursales: state.succursales,
    libelles: state.libelles,
    isLogin: state.isLogin
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const HomeLayout = connect(mapStateToProps, mapDispachToProps)(App);

export default HomeLayout;

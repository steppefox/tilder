import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import './_app.styl';

import { createStore } from '../store';
import Header from '../components/Header';

export class MyApp extends App<IProps> {
  render () {
    const { Component, pageProps, router, store } = this.props;

    return <Container>
      <Provider store={store}>
        <div className="app">

          <Header />

          <div className="app__container">
            <Component {...pageProps} router={router} />
          </div>
        </div>
      </Provider>
    </Container>
  }
}

interface IProps {
  Component: any,
  pageProps: any,
  router: any,
  store: any,
};

export default withRedux(createStore)(MyApp)

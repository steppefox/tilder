import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import './_app.styl';

import { createStore } from '../store';

interface IProps {
  Component: any,
  pageProps: any,
  router: any,
  store: any,
};

export class MyApp extends App<IProps> {
  // static async getInitialProps ({ Component, router, ctx }) {
  //   let pageProps = {}

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }

  //   return {pageProps}
  // }

  render () {
    const { Component, pageProps, router, store } = this.props;

    return <Container>
      <Provider store={store}>
        <Component {...pageProps} router={router} />
      </Provider>
    </Container>
  }
}

export default withRedux(createStore)(MyApp)

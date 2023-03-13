/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

import Page from '../components/Page';
import LoadingOverlay from '../components/LoadingOverlay';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './styles.css';
import '../index.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }): JSX.Element {
  NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    trickle: true,
    trickleSpeed: 20,
  });

  const [_document, set_document] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // wait for document to be loaded
  React.useEffect(() => {
    set_document(document);
  }, []);
  React.useEffect(() => {
    if (_document) {
      NProgress.start();
      setTimeout(() => {
        NProgress.set(0.99);
        setTimeout(() => {
          NProgress.done();
        }, 500);
        setIsLoaded(true);
      }, 1000);
    }
  }, [_document]);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          AniFi World | Free to Play, Play to Earn NFT Strategy Card GameFi
        </title>
        <link href="/css/font.css" rel="stylesheet" />
      </Head>
      <Page>
        <LoadingOverlay isLoaded={isLoaded} />
        <Component setIsLoaded={setIsLoaded} {...pageProps} />
      </Page>
    </React.Fragment>
  );
}

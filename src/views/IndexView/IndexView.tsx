import React from 'react';
import Main from 'layouts/Main';
import {
  Banner,
  GettingStarted,
  NFT,
  System,
  Roadmap,
  Partners,
  Video,
} from './components';

const IndexView = (): JSX.Element => {
  return (
    <Main>
      <Banner />
      <GettingStarted />
      <NFT />
      <System />
      <Roadmap />
      <Partners />
    </Main>
  );
};

export default IndexView;

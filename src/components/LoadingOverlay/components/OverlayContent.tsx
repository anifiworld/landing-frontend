import * as React from 'react';
import { Spinner } from '@chakra-ui/spinner';

const OverlayContent = (): JSX.Element => {
  return (
    <>
      <img width="72px" src="/banner/logo.png" alt="AniFi World Logo" />
      <Spinner
        width="24px"
        height="24px"
        color="white"
        thickness="2px"
        speed="0.65s"
      />
    </>
  );
};

export default OverlayContent;

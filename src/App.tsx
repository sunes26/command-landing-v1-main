import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled, { createGlobalStyle } from 'styled-components';

import Router from './Router';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('fonts/AppleSDGothicNeoL00.woff2') format('woff2'),
        url('fonts/AppleSDGothicNeoL00.woff') format('woff'),
        url('fonts/AppleSDGothicNeoL00.ttf') format('truetype'),
        url('fonts/AppleSDGothicNeoL00.svg#AppleSDGothicNeoL00') format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('fonts/AppleSDGothicNeoM00.woff2') format('woff2'),
        url('fonts/AppleSDGothicNeoM00.woff') format('woff'),
        url('fonts/AppleSDGothicNeoM00.ttf') format('truetype'),
        url('fonts/AppleSDGothicNeoM00.svg#AppleSDGothicNeoM00') format('svg');
    font-weight: 500;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('fonts/AppleSDGothicNeoSB00.woff2') format('woff2'),
        url('fonts/AppleSDGothicNeoSB00.woff') format('woff'),
        url('fonts/AppleSDGothicNeoSB00.ttf') format('truetype'),
        url('fonts/AppleSDGothicNeoSB00.svg#AppleSDGothicNeoSB00') format('svg');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('fonts/AppleSDGothicNeoB00.woff2') format('woff2'),
        url('fonts/AppleSDGothicNeoB00.woff') format('woff'),
        url('fonts/AppleSDGothicNeoB00.ttf') format('truetype'),
        url('fonts/AppleSDGothicNeoB00.svg#AppleSDGothicNeoB00') format('svg');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('fonts/AppleSDGothicNeoEB00.woff2') format('woff2'),
        url('fonts/AppleSDGothicNeoEB00.woff') format('woff'),
        url('fonts/AppleSDGothicNeoEB00.ttf') format('truetype'),
        url('fonts/AppleSDGothicNeoEB00.svg#AppleSDGothicNeoEB00') format('svg');
    font-weight: 800;
    font-style: normal;
    font-display: block;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
  }

  * {
    font-family: --apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo'
  }
`;

const Wrapper = styled(BrowserRouter)`
  flex: 1 0 auto;
`;

const App: React.FC = () => (
  <ParallaxProvider>
    <GlobalStyle />
    <Wrapper>
      <Router />
    </Wrapper>
  </ParallaxProvider>
);

export default App;

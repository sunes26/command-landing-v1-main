import React from 'react';
import { BrowserView } from 'react-device-detect';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Member from './pages/Member';
import NotFound from './pages/NotFound';

const Container = styled.div`
  .enter {
    opacity: 0;
  }

  .enter.enter-active {
    opacity: 1;
    transition: opacity 150ms ease-out 300ms;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0;
    transition: opacity 150ms ease-out;
  }
`;

const TransitionGroupEx = styled(TransitionGroup)`
  position: relative;
`;

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: calc(100vh - 4.375rem);
  top: 0;
  left: 0;
`;

const Router: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <BrowserView>
        <Navigation />
      </BrowserView>
      <TransitionGroupEx>
        <CSSTransition key={location.key} timeout={{ enter: 450, exit: 150 }}>
          <Section>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/Member" component={Member} />
              <Route component={NotFound} />
            </Switch>
          </Section>
        </CSSTransition>
      </TransitionGroupEx>
    </Container>
  );
};

export default Router;

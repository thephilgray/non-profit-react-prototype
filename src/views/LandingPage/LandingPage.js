import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import Hero from './Sections/Hero';
import DonateCallToAction from './Sections/DonateCallToAction';
import About from './Sections/About';
import Issues from './Sections/Issues';
import News from './Sections/News';

const ApplicationWrap = styled('div')`
  flex: 1 1 auto;
  backface-visibility: hidden;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
`;

class LandingPage extends Component {
  render() {
    return (
      <div className="Page">
        <Header />
        <main
          role="main"
          style={{
            marginTop: '100px'
          }}
        >
          <ApplicationWrap className="Page__MainWrapper">
            <section className="Page__Hero">
              <Hero />
            </section>
            <section className="Page__DonateCallToAction">
              <DonateCallToAction />
            </section>
            <section
              className="Page__About"
              style={{
                background: '#eeeded'
              }}
            >
              <About />
            </section>
            <section className="Page__Issues">
              <Issues />
            </section>
            <section
              className="Page__News"
              style={{
                background: '#fff'
              }}
            >
              <News />
            </section>
          </ApplicationWrap>
        </main>
      </div>
    );
  }
}

export default LandingPage;

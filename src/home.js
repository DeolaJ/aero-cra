import React from 'react';
import Body from './components/layout/body';
import Header from './components/layout/header';
import AboutUs from './components/layout/about-us';
import PopularDeals from './components/layout/popular-deals';
import NewsFeed from './components/layout/news-feed';
import Booking from './components/layout/booking';
import HowItWorks from './components/layout/how-it-works';
import TrustSection from './components/layout/trust-section';

export default function Home() {
  return (
    <Body>
      <Header />
      <Booking />
      <NewsFeed />
      <PopularDeals />
      <AboutUs />
      <HowItWorks />
      <TrustSection />
    </Body>
  );
}

import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurResult from '../../components/OurResult/OurResult';
import TopContributors from '../../components/TopContributors/TopContributors';

const Home = () => {
    return (
      <div>
        <HeroSection></HeroSection>
        <TopContributors></TopContributors>
        <OurResult></OurResult>
      </div>
    );
};

export default Home;
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurResult from '../../components/OurResult/OurResult';
import TopContributors from '../../components/TopContributors/TopContributors';
import PopularAritcles from '../../components/PopularArticles/PopularAritcles';

const Home = () => {
    return (
      <div>
        <HeroSection></HeroSection>
        <PopularAritcles></PopularAritcles>
        <TopContributors></TopContributors>
        <OurResult></OurResult>
      </div>
    );
};

export default Home;
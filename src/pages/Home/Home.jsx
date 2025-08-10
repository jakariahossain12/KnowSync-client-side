import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurResult from '../../components/OurResult/OurResult';
import TopContributors from '../../components/TopContributors/TopContributors';
import PopularAritcles from '../../components/PopularArticles/PopularAritcles';
import { useLoaderData } from 'react-router';
import WeeklyKnowledgeChallenge from '../../components/WeeklyKnowledgeChallenge/WeeklyKnowledgeChallenge ';
import SuccessStories from '../../components/SuccessStories/SuccessStories';

const Home = () => {
  const articles = useLoaderData();
    return (
      <div>
        <HeroSection></HeroSection>
        <PopularAritcles articles={articles}></PopularAritcles>

        <WeeklyKnowledgeChallenge></WeeklyKnowledgeChallenge>

        <TopContributors></TopContributors>
        <OurResult></OurResult>
        <SuccessStories></SuccessStories>
      </div>
    );
};

export default Home;
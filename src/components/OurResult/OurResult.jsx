import React from 'react';
import CountUp from 'react-countup';

const OurResult = () => {
    return (
      <section className="bg-primary text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Results</h2>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="border border-white/30 rounded-md px-6 py-10">
            <h3 className="text-4xl font-bold mb-2">
              <CountUp start={0} end={30} duration={10} delay={3} />
            </h3>
            <p className="text-lg font-medium">Countries Supported</p>
            <p className="text-sm mt-4 opacity-80">
              by our national projects since 2014
            </p>
          </div>

          <div className="border border-white/30 rounded-md px-6 py-10">
            <h3 className="text-4xl font-bold mb-2">
              <CountUp start={0} end={14} duration={17} delay={3} />
            </h3>
            <p className="text-lg font-medium">
              Climate Change Learning Strategies Developed
            </p>
            <p className="text-sm mt-4 opacity-80">
              in partnership with national and global partners
            </p>
          </div>

          <div className="border border-white/30 rounded-md px-6 py-10">
            <h3 className="text-4xl font-bold mb-2">
              <CountUp start={0} end={1100000} duration={10} delay={3} />
            </h3>
            <p className="text-lg font-medium">Beneficiaries Reached</p>
            <p className="text-sm mt-4 opacity-80">in 195 countries</p>
          </div>
        </div>
      </section>
    );
};

export default OurResult;
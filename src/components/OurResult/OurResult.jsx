import React from 'react';

const OurResult = () => {
    return (
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Results</h2>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="border border-white/30 rounded-md px-6 py-10">
            <h3 className="text-4xl font-bold mb-2">30</h3>
            <p className="text-lg font-medium">Countries Supported</p>
            <p className="text-sm mt-4 opacity-80">
              by our national projects since 2014
            </p>
          </div>

          <div className="border border-white/30 rounded-md px-6 py-10">
            <h3 className="text-4xl font-bold mb-2">14</h3>
            <p className="text-lg font-medium">
              Climate Change Learning Strategies Developed
            </p>
            <p className="text-sm mt-4 opacity-80">
              in partnership with national and global partners
            </p>
          </div>

          <div className="border border-white/30 rounded-md px-6 py-10">
            <h3 className="text-4xl font-bold mb-2">1100000</h3>
            <p className="text-lg font-medium">Beneficiaries Reached</p>
            <p className="text-sm mt-4 opacity-80">in 195 countries</p>
          </div>
        </div>
      </section>
    );
};

export default OurResult;
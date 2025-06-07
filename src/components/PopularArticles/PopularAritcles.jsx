import React, { use } from 'react';
import { Link } from 'react-router';
import { Calculator, Code, Palette, Atom, Cpu, Layers } from "lucide-react";
import * as Icons from "lucide-react";

const categoryPromise = fetch('/category.json').then(res=>res.json())

const PopularAritcles = () => {
    const categories = use(categoryPromise);
    


    return (
      <div className="w-10/12 mx-auto text-text bg-background my-7 space-y-5">
        <div>
          <h1 className="font-extrabold text-4xl text-center">
            {" "}
            Popular <span className="text-primary">Articles</span>
          </h1>
          <p className="text-center pt-3 text-text-muted text-lg">
            "Discover the most-read and highly-rated articles shared by our
            vibrant student community. <br /> Stay inspired and informed with
            trending insights!"
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center flex-wrap">
                {categories.map((category) => {
                    // let LucideIcon = Icons[category?.icon]
                    return (
                      <Link
                        key={category?.id}
                        to={`view-category/${category?.name}`}
                        className="relative border-2 border-primary inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative font-bold  w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white">
                          {category?.name} 
                        </span>
                      </Link>
                    );
                } 
            
          )}
        </div>
      </div>
    );
};

export default PopularAritcles;
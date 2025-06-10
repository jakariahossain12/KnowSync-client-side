import React, { use, } from "react";
import ArticleCard from "../../components/ArticlesCard/ArticleCard";
import { Link, useLoaderData } from "react-router";
const categoryPromise = fetch("/category.json").then((res) => res.json());

const AllArticles = () => {
  const categories = use(categoryPromise);

  const articles = useLoaderData();
  console.log(articles);

  

  return (
    <div className="my-7 space-y-3">
      <h1 className="text-center text-3xl font-bold">All Articles</h1>
      <div className="flex gap-3 justify-center items-center flex-wrap">
        {categories.map((category) => {
          // let LucideIcon = Icons[category?.icon]
          return (
            <Link
              key={category?.id}
              to={`/article-all/view-category/${category?.name}`}
              className="relative border-2 border-primary inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative font-bold  w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-white">
                {category?.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;

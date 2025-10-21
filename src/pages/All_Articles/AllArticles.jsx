import React, { use, useEffect, useState, } from "react";
import ArticleCard from "../../components/ArticlesCard/ArticleCard";
import { Link, useLoaderData } from "react-router";
import { Fade } from "react-awesome-reveal";
const categoryPromise = fetch("/category.json").then((res) => res.json());

const AllArticles = () => {
  const categories = use(categoryPromise);

  // const articles = useLoaderData();

   const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/article-all?page=${page}&limit=6`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  

  

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
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-4 my-10">
        <Fade cascade duration={700}>
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article}></ArticleCard>
          ))}
        </Fade>
      </div>

       {/* Pagination Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 font-semibold">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default AllArticles;

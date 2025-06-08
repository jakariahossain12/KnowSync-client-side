import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ArticleCard from "../../components/ArticlesCard/ArticleCard";

const ViewCategory = () => {
  const { id } = useParams();

    const  [articles, setArticle]  = useState([]);
    console.log(articles);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/article-all?category=${id}`)
      .then((res) => {
          console.log(res);
          setArticle(res?.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id,setArticle]);

  return (
    <>
      {window.scrollTo(0,0)}
      <div className="my-4 space-y-4 min-h-80">
        <h1 className="text-center text-3xl font-bold">
          {articles.length > 0 ? `All ${id} Articles` : `No ${id} Articles`}{" "}
        </h1>
        <div className="w-11/12   mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
          {articles &&
            articles.map((article) => (
              <ArticleCard key={article._id} article={article}></ArticleCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default ViewCategory;

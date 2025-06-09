import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import axios from "axios";
import ArticleCard from "../../components/ArticlesCard/ArticleCard";
import MyArticleCard from "../../components/MyArticleCard/MYArticleCard";
import { toast } from "react-toastify";

const MyArticle = () => {
  const { user } = use(AuthContext);
  const [articles, setArticle] = useState([]);
  const message = ()=>toast.success('Article Delete successfully')

  useEffect(() => {
    axios
      .get(`http://localhost:3000/my-article?email=${user.email}`)
      .then((res) => {
        console.log(res.data);
        setArticle(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  

  const handelDelete = (Id) => {
    axios
      .delete(`http://localhost:3000/my-article/${Id}`)
      .then( (res) => {
        
        if (res.data.deletedCount) {
          message()
          const newArticle =  articles.filter((art) => art._id !== Id);
          setArticle(newArticle);
        }
      })
      .catch(() => {
        
      });
  };

  return (
    <div className="my-4 space-y-4 min-h-80">
      <h1 className="text-center text-3xl font-bold">
        {articles.length > 0 ? `` : `No  Articles`}{" "}
      </h1>
      <div className="w-11/12   mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
        {articles &&
          articles.map((article) => (
            <MyArticleCard
              handelDelete={handelDelete}
              key={article._id}
              article={article}
            ></MyArticleCard>
          ))}
      </div>
    </div>
  );
};

export default MyArticle;

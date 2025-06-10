import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";

import ArticleCard from "../../components/ArticlesCard/ArticleCard";
import MyArticleCard from "../../components/MyArticleCard/MYArticleCard";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyArticle = () => {
  const { user } = use(AuthContext);
  const [articles, setArticle] = useState([]);
  // const message = ()=>toast.success('')
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/my-article?email=${user.email}`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch(() => {
        
      });
  }, [user, axiosSecure]);

  const handelDelete = (Id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/my-article/${Id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const newArticle = articles.filter((art) => art._id !== Id);
              setArticle(newArticle);
            }
          })
          .catch(() => {});

        Swal.fire({
          title: "Deleted!",
          text: "Article Delete successfully",
          icon: "success",
        });
      }
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

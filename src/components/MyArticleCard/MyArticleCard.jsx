import { MessageSquare, Bookmark } from "lucide-react";
import { use } from "react";
import { AuthContext } from "../../Context/Context";
import { Link } from "react-router";

const MyArticleCard = ({ article, handelDelete }) => {
  return (
    <div className="bg-white  dark:bg-base-200 rounded-lg border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="avatar cursor-pointer">
          <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
            <img src={article.userPik} alt="User Avatar" />
          </div>
        </div>
        <div>
          <p className="font-semibold">{article?.author}</p>
          <p className="text-sm text-gray-500">{article?.date}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-1">{article?.title}</h2>
      <p className="text-gray-500 mb-3">#{article?.category}</p>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <div>
          <button className="flex items-center gap-1 hover:underline">
            <MessageSquare className="w-4 h-4 text-primary" />
            Add Comment
          </button>
        </div>

        <div className="mt-4 flex gap-3 flex-wrap justify-end">
          <Link
            to={`/my-article/article-details/${article._id}`}
            className="btn btn-sm btn-primary"
          >
            Read More
          </Link>
          <Link
            to={`/my-article/${article._id}`}
            className="btn btn-sm btn-success hover:bg-white  text-white"
          >
            UpDate
          </Link>
          <button
            onClick={() => handelDelete(article._id)}
            className="btn btn-sm btn-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyArticleCard;

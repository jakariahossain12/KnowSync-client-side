import { MessageSquare, Bookmark } from "lucide-react";
import { use } from "react";
import { AuthContext } from "../../Context/Context";

const ArticleCard = ({ article }) => {
  const {user}=use(AuthContext)
  return (
    <div className="bg-white  dark:bg-base-200 rounded-lg border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={article?.authorAvatar || user?.photoURL}
          alt={article?.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{article?.author}</p>
          <p className="text-sm text-gray-500">{article?.date}</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-1">{article?.title}</h2>
      <p className="text-gray-500 mb-3">#{article?.category}</p>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <button className="flex items-center gap-1 hover:underline">
          <MessageSquare  className="w-4 h-4 text-primary" />
          Add Comment
        </button>

        <div className="mt-4">
          <button className="btn btn-sm btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

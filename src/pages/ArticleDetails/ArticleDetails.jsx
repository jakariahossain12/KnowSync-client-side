import { use, useState } from "react";
import { ThumbsUp, MessageSquare } from "lucide-react";
import { useLoaderData } from "react-router";
import axios from "axios";
import { AuthContext } from "../../Context/Context";

const ArticleDetails = () => {
  const article = useLoaderData();
  const { user } = use(AuthContext);

  const [likeCount, setLikeCount] = useState(article?.likes?.length);
  // const [likeBy, setLikeBy] = useState(false);

  const [comments, setComments] = useState(article?.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    axios
      .patch(`http://localhost:3000/like-article/${article?._id}`, {
        email: user?.email,
      })
      .then((res) => {
        
        const isLikes = res.data.likes;
        setLikeCount(prv => isLikes ? prv + 1 : prv - 1);
      })
      .catch(() => {
        
      });
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-3xl my-7 mx-auto p-6 bg-white dark:bg-base-200 rounded-lg shadow">
      {/* Header */}
      {window.scrollTo(0, 0)}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={article?.userPik}
          alt={article?.author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold">{article?.name}</h2>
          <p className="text-sm text-gray-500">{article?.date}</p>
        </div>
      </div>

      {/* Title & Content */}
      <h1 className="text-2xl font-bold mb-2">{article?.title}</h1>
      <p className="text-gray-700 mb-4">{article?.content}</p>

      {/* Meta Info */}
      <div className="mb-4">
        <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded">
          #{article?.category}
        </span>
        {article?.tags > 0 && (
          <div className="mt-2 space-x-2">{article?.tags}</div>
        )}
      </div>

      {/* Like & Comment Actions */}
      <div className="flex items-center justify-between text-sm mb-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <ThumbsUp size={18} />
          Like ({likeCount})
        </button>
        <p className="flex items-center gap-1 text-gray-500">
          <MessageSquare size={18} />
          {comments?.length} Comments
        </p>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <div className="space-y-2">
          {comments?.map((comment, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-2 rounded text-sm text-gray-700"
            >
              {comment}
            </div>
          ))}
        </div>

        {/* Add Comment */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={handleCommentSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;

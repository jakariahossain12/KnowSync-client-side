import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/Context";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router";

const MyArticleUpdate = () => {
    const article = useLoaderData();
    const navigate = useNavigate()
  const massess = () => toast.success("Article Update Successfully");
  const [content, setContent] = useState("");
  const textareaRuf = useRef(null);
  const { user } = use(AuthContext);
  useEffect(() => {
    if (textareaRuf.current) {
      textareaRuf.current.style.height = "auto";
      textareaRuf.current.style.height = `${textareaRuf.current.scrollHeight}px`;
    }
  }, [content]);

  const token = localStorage.getItem("token");

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const article = Object.fromEntries(formData.entries());
    

    fetch(`http://localhost:3000/my-article/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          massess();
          navigate("/my-articles");
        }
      })
      .catch(() => {});
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-base-100 rounded-xl shadow space-y-4 my-8">
      <h2 className="text-2xl font-semibold text-primary text-center">
        Update Article
      </h2>
      <form onSubmit={(e) => handleSubmit(e, article._id)} className="">
        <div className="">
          <label className=" block text-text">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={article?.title}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="">
          <label className="block text-text">Category</label>
          <select
            name="category"
            defaultValue={article?.category}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select a category</option>
            <option value="Programming">Programming</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Technology">Technology</option>

            <option value="Others">Others</option>
          </select>
        </div>

        <div className="">
          <label className="block text-text">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            defaultValue={article?.tags}
            placeholder="e.g. JavaScript, React"
            className="input input-bordered w-full"
          />
        </div>

        <div className="">
          <label className="block text-text">Thumbnail Image URL</label>
          <input
            type="url"
            name="thumbnail"
            defaultValue={article?.thumbnail}
            className="input input-bordered w-full"
          />
        </div>

        <div className="">
          <label className="block text-text">Date</label>
          <input
            type="date"
            name="date"
            defaultValue={article?.date}
            className="input input-bordered w-full"
          />
        </div>

        <div className="">
          <label className="block text-text">Name</label>
          <input
            type="name"
            name="name"
            value={user?.displayName}
            className="input input-bordered bg-base-200 w-full"
          />
        </div>
        <div className="">
          <label className="block text-text">Email</label>
          <input
            type="email"
            value={user?.email}
            name="email"
            className="input input-bordered bg-base-200 w-full"
          />
        </div>

        <div className="">
          <label className="block text-text">Content</label>
          <textarea
            ref={textareaRuf}
            name="content"
            onChange={(e) => setContent(e.target.value)}
            rows={1}
            defaultValue={article?.content}
            className="w-full p-2 border border-gray-300 rounded resize-none overflow-hidden"
            placeholder="Type something..."
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary mt-3 w-full">
            Update Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyArticleUpdate;

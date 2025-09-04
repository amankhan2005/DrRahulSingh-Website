import React, { useEffect, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Format date to DD-MMM-YYYY
const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const BlogComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogData, status, error } = useSelector((state) => state.data);

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  const handleNavigate = (id) => navigate(`/blog/${id}`);

  // Show only 3 blogs at a time
  const visibleBlogs = blogData.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 3);
  };

  const handleNext = () => {
    if (startIndex + 3 < blogData.length) setStartIndex(startIndex + 3);
  };

  return (
    <div className="lg:py-10 md:py-10 py-10 bg-gray-50 relative">
      <h1 className="md:text-5xl text-3xl font-bold text-primary text-center mb-2">
        Our Recent Blogs
      </h1>
      <p className="text-gray-600 text-sm mb-4 md:text-base text-center">
        Latest updates, tips, and insights from our team.
      </p>

      <div className="px-4 relative container mx-auto">
        {status === "loading" && <p className="text-center text-gray-400">Loading Blog Data...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {blogData.length === 0 && status !== "loading" && (
          <p className="text-center text-red-500">No Data Found</p>
        )}

        {visibleBlogs.length > 0 && (
          <div className="relative">
            {/* Left Button */}
            {startIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
                aria-label="Previous Blogs"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Blogs Grid */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {visibleBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="rounded-xl shadow-lg hover:shadow-2xl bg-white overflow-hidden transition transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  onClick={() => handleNavigate(blog._id)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-54 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-400 mb-3">
                      By <span className="text-gray-900 font-medium">{blog.postedBy}</span> on{" "}
                      {formatDate(blog.createdAt)}
                    </p>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-900">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-5 line-clamp-3">
                      {blog.description.replace(/<\/?[^>]+(>|$)/g, "")}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(blog._id);
                      }}
                      className="px-5 py-2 rounded-full bg-primary text-white font-medium shadow-md hover:from-indigo-500 hover:to-blue-500 transition"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            {startIndex + 3 < blogData.length && (
              <button
                onClick={handleNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
                aria-label="Next Blogs"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(BlogComponent);

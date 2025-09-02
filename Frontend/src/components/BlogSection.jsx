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
    <div className="lg:py-10 md:py-10 py-10 relative">
      <h1 className="md:text-4xl text-2xl font-bold text-primary text-center">
        Our Recent Blog
      </h1>
      <p className="text-gray-600 md:mb-6 mb-2 text-center text-sm md:text-base">
        Latest updates, tips, and insights from our team.
      </p>

      <div className="px-4 relative container mx-auto">
        {status === "loading" && <p className="text-center">Loading Blog Data...</p>}
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
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Blogs Grid (3 fixed cards) */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
              {visibleBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="rounded-lg shadow-2xl hover:shadow-none p-4 transition cursor-pointer bg-white"
                  onClick={() => handleNavigate(blog._id)}
                >
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-60 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-gray-500 mb-4 underline underline-offset-4">
                    Published by <span className="text-gray-900">{blog.postedBy}</span> ||{" "}
                    <span>on {formatDate(blog.createdAt)}</span>
                  </p>
                  <h3 className="text-lg font-medium line-clamp-1 mb-2">{blog.title}</h3>
                  <p className="text-gray-700 mb-2 line-clamp-2">
                    {blog.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(blog._id);
                    }}
                    aria-label={`Read more about ${blog.title}`}
                    title="Read More Blog"
                    className="text-white bg-primary hover:bg-blue-600 cursor-pointer px-3 py-1 rounded"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>

            {/* Right Button */}
            {startIndex + 3 < blogData.length && (
              <button
                onClick={handleNext}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(BlogComponent);

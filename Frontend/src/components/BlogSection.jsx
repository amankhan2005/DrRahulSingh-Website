 import React, { useEffect, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const { blogData = [], status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (!blogData.length) dispatch(fetchBlogData());
  }, [dispatch, blogData.length]);

  const handleNavigate = (id) => navigate(`/blog/${id}`);

  // Scroll state
  const [scrollRef, setScrollRef] = useState(null);

  const scrollLeft = () => {
    if (scrollRef) scrollRef.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef) scrollRef.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-gray-50 relative">
          <h2 className="md:text-5xl text-3xl font-bold text-center text-primary leading-tight">
        Our Recent Blogs
      </h2>
      <p className="text-gray-600 text-sm mb-4 md:text-base text-center">
        Latest updates, tips, and insights from our team.
      </p>

      <div className="relative container mx-auto px-4">
        {status === "loading" && <p className="text-center text-gray-400">Loading Blog Data...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {blogData.length === 0 && status !== "loading" && (
          <p className="text-center text-red-500">No Data Found</p>
        )}

        {blogData.length > 0 && (
          <div className="relative">
            {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Horizontal Scrollable Row */}
            <div
              ref={setScrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide py-2"
            >
              {blogData.map((blog) => (
                <article
                  key={blog._id}
                  className="flex-shrink-0 w-[90%] sm:w-[300px] md:w-[320px] rounded-lg shadow-md hover:shadow-xl bg-white overflow-hidden transition transform hover:-translate-y-0.5 hover:scale-102 cursor-pointer"
                  onClick={() => handleNavigate(blog._id)}
                >
                  <div className="overflow-hidden h-40 md:h-48 w-full">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <p className="text-xs text-gray-400 mb-1">
                      By <span className="text-gray-900 font-medium">{blog.postedBy}</span> on{" "}
                      {formatDate(blog.createdAt)}
                    </p>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-900">{blog.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                      {blog.description.replace(/<\/?[^>]+(>|$)/g, "")}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(blog._id);
                      }}
                      className="px-4 py-1.5 rounded-full bg-primary text-white font-medium shadow-sm hover:from-indigo-500 hover:to-blue-500 transition text-sm"
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(BlogComponent);

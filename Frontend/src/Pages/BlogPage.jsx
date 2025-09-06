 import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BreadCumb from "../components/BreadCumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";

const BlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { blogData, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: "Blog", link: `/blog` },
        ]}
        title="Our Recent Blogs"
      />

      <div className="py-8 px-4 md:px-10 bg-gray-50 min-h-screen">
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {/* Loading State */}
          {status === "loading" && (
            <p className="text-center col-span-3 text-gray-600 text-lg">
              Loading Blog Data...
            </p>
          )}

          {/* Error State */}
          {error && (
            <p className="text-center col-span-3 text-red-500 text-lg">{error}</p>
          )}

          {/* No Data */}
          {blogData?.length === 0 && status !== "loading" && (
            <p className="text-center col-span-3 text-gray-500 text-lg">
              No Blogs Found
            </p>
          )}

          {/* Blog List */}
          {blogData?.map((blog) => {
            const formattedDate = blog.createdAt
              ? new Date(blog.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "";

            return (
              <div
                key={blog._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => navigate(`/blog/${blog._id}`)}
              >
                <div className="overflow-hidden h-56 md:h-48">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-gray-500 mb-2">
                    Published by{" "}
                    <span className="text-gray-900 font-medium">{blog.postedBy}</span>{" "}
                    | {formattedDate}
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold mb-3 line-clamp-1 text-gray-900">
                    {blog.title}
                  </h3>

                  <p className="text-gray-700 text-sm md:text-base mb-5 line-clamp-3">
                    {blog.description?.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>

                  <div className="mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blog/${blog._id}`);
                      }}
                      className=" bg-primary text-white px-4 py-2 rounded-lg hover:from-indigo-600 hover:to-blue-500 transition"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogPage;

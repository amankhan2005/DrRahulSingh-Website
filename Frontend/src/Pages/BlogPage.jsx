 import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BreadCumb from "../components/BreadCumb";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";

const BlogPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux State (blogs instead of blogData ✅)
  const { blogData, status, error } = useSelector((state) => state.data);

  // Fetch Blogs
  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);

  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Blog`, link: `/blog` },
        ]}
        title="Our Recent Blog"
      />

      <div className="py-6 md:px-10 px-4">
        <div className="col-span-12 grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* Loading State */}
          {status === "loading" && (
            <p className="text-center col-span-3">Loading Blog Data...</p>
          )}

          {/* Error State */}
          {error && (
            <p className="text-center col-span-3 text-red-500">{error}</p>
          )}

          {/* No Data */}
          {blogData?.length === 0 && status !== "loading" && (
            <p className="text-center col-span-3 text-red-500">
              No Data Found
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
                className="rounded-lg p-4 mb-4 shadow-2xl hover:shadow-none transition cursor-pointer bg-white"
                onClick={() => navigate(`/blog/${blog._id}`)}
              >
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-50 object-cover rounded-lg mb-2"
                />

                <p className="text-sm text-gray-500 mb-1 underline underline-offset-4">
                  Published by{" "}
                  <span className="text-gray-900">{blog.postedBy}</span> ||
                  <span> on {formattedDate}</span>
                </p>

                <h3 className="text-xl font-medium line-clamp-1 mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-700 mb-2 line-clamp-2">
                  {blog.description?.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>

                <div className="text-sm text-gray-500 flex justify-between items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blog/${blog._id}`);
                    }}
                    className="text-white bg-primary hover:bg-blue-600 cursor-pointer px-3 py-1 rounded"
                  >
                    Read More
                  </button>
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

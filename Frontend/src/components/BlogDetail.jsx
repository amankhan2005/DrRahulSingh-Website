 import React, { useEffect, useState, memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCumb from "../components/BreadCumb";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogData = [], status, error } = useSelector((state) => state.data);
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs if not loaded
  useEffect(() => {
    if (!blogData.length) dispatch(fetchBlogData());
    setBlogs(blogData);
  }, [blogData, dispatch]);

  const blog = blogs?.find((b) => b._id === id);
  const moreBlogs = blogs?.filter((b) => b._id !== id).slice(0, 3);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Loading/Error States
  if (status === "loading") {
    return <div className="text-center py-10 text-gray-600">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-10 text-red-500">Blog not found!</div>;
  }

  return (
    <>
      <BreadCumb
        items={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: blog.title, link: `/blog/${blog._id}` },
        ]}
        title={blog.title}
      />

      <main className="py-10 px-4 container mx-auto grid grid-cols-12 gap-8">
        {/* Main Blog Section */}
        <article className="md:col-span-8 col-span-12 flex flex-col space-y-6">
          <figure className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              loading="lazy"
              decoding="async"
              className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>
          <p className="text-sm text-gray-500">
            Published by{" "}
            <span className="text-gray-900 font-semibold">{blog.postedBy}</span> on{" "}
            {formatDate(blog.createdAt)}
          </p>
          <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
          <div
            className="prose prose-lg max-w-full text-gray-700"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.description) }}
          />
        </article>

        {/* More Blogs Section */}
        <aside className="md:col-span-4 col-span-12 flex flex-col bg-gray-50 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">
            More Blogs
          </h2>
          <div className="flex flex-col space-y-4 overflow-y-auto max-h-[80vh] pr-2">
            {moreBlogs.length === 0 && (
              <p className="text-gray-500 text-center mt-4">No More Blogs</p>
            )}
            {moreBlogs.map((b) => (
              <article
                key={b._id}
                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
                onClick={() => navigate(`/blog/${b._id}`)}
              >
                {/* Image */}
                <div className="h-40 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={b.imageUrl}
                    alt={b.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                    {b.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(b.description),
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </aside>
      </main>
    </>
  );
};

export default memo(BlogDetailPage);

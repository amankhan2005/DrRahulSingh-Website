 import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCumb from "../components/BreadCumb";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../redux/slices/dataslice";

const BlogDetailPage = () => {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const { blogData, status } = useSelector((state) => state.data);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!blogData.length) {
      dispatch(fetchBlogData());
    }
    setBlogs(blogData);
  }, [blogData, dispatch]);

  const blog = blogs?.find((b) => b._id === id);

  // Filter out current blog and take only 3 unique blogs
  const moreBlogs = blogs
    ?.filter((b) => b._id !== id)
    .slice(0, 3); // Limit to 3 items

  if (status === "loading") {
    return <div className="text-center py-10">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-10 text-red-500">Blog not found!</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

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

      <div className="py-8 px-4 max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* Main Blog Section */}
        <div className="md:col-span-8 col-span-12">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full md:h-96 h-auto md:object-cover object-contain rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-4">
            Published by{" "}
            <span className="text-gray-900 font-semibold">{blog.postedBy}</span> on{" "}
            {formatDate(blog.createdAt)}
          </p>
          <h1 className="text-3xl font-bold my-2">{blog.title}</h1>
          <div
            className="blog"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.description) }}
          />
        </div>

        {/* More Blogs Section */}
        <div className="md:col-span-4 col-span-12 border border-gray-300 rounded-2xl p-4 bg-gray-100">
          <h3 className="text-2xl font-semibold mb-4 messiri">More Blogs</h3>
          <div className="space-y-4 md:max-h-[90vh] max-h-[50vh] overflow-y-scroll">
            {moreBlogs.length === 0 && <p className="text-red-500">No More Blogs</p>}
            {moreBlogs.map((b) => (
              <div
                key={b._id}
                className="rounded-lg p-4 bg-white shadow-lg hover:shadow-md transition cursor-pointer"
                onClick={() => navigate(`/blog/${b._id}`)}
              >
                <img
                  src={b.imageUrl}
                  alt={b.title}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <h4 className="text-lg font-semibold line-clamp-1">{b.title}</h4>
                <div
                  className="line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(b.description) }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;

 import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BlogModal from "./BlogModal";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${api}/blog/getall`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await axios.delete(`${api}/blog/delete/${id}`);
      setBlogs(blogs.filter((b) => b._id !== id));
      Swal.fire("Deleted!", "The blog has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting blog:", error);
      Swal.fire("Error!", "Failed to delete blog.", "error");
    }
  };

  const handleEdit = (b) => {
    setSelectedBlog(b);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedBlog(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchBlogs();
  };

  const removeHTMLTags = (text) => text.replace(/<[^>]*>/g, "");

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Blog Management
        </h2>
        <button
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-full shadow-md text-sm sm:text-base"
        >
          Add New Blog
        </button>
      </div>

      {isFormOpen ? (
        <div className="h-full w-full">
          <BlogModal blogData={selectedBlog} onClose={handleCloseForm} />
        </div>
      ) : (
        <>
          {/* Table for larger screens */}
          <div className="hidden sm:block overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="w-full text-left text-gray-700">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 font-medium">Photo</th>
                  <th className="p-3 font-medium">Title</th>
                  <th className="p-3 font-medium">Description</th>
                  <th className="p-3 font-medium">Posted By</th>
                  <th className="p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center text-red-500 p-6 font-medium"
                    >
                      No blogs uploaded yet!
                    </td>
                  </tr>
                ) : (
                  blogs.map((b) => (
                    <tr
                      key={b._id}
                      className="hover:bg-gray-50 transition border-b last:border-0"
                    >
                      <td className="p-3">
                        <img
                          src={b.imageUrl}
                          alt={b.title}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </td>
                      <td className="p-3 font-medium text-gray-800">
                        {b.title}
                      </td>
                      <td className="p-3 text-sm text-gray-600 max-w-xs">
                        <p className="line-clamp-3">
                          {removeHTMLTags(b.description)}
                        </p>
                      </td>
                      <td className="p-3 font-medium text-gray-800">
                        {b.postedBy}
                      </td>
                      <td className="p-3 flex gap-2">
                        <button
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md shadow-sm"
                          onClick={() => handleEdit(b)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-sm"
                          onClick={() => handleDelete(b._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Card layout for mobile */}
          <div className="sm:hidden space-y-4">
            {blogs.length === 0 ? (
              <p className="text-center text-red-500 font-medium">
                No blogs uploaded yet!
              </p>
            ) : (
              blogs.map((b) => (
                <div
                  key={b._id}
                  className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={b.imageUrl}
                      alt={b.title}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {b.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        By {b.postedBy}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {removeHTMLTags(b.description)}
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md shadow-sm text-sm"
                      onClick={() => handleEdit(b)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-sm text-sm"
                      onClick={() => handleDelete(b._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDashboard;

 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKENDURL;

// -------------------- Blog Thunks --------------------
export const fetchBlogData = createAsyncThunk("data/fetchBlog", async () => {
  const response = await axios.get(`${backendUrl}/blog/getall`);
  return response.data;
});

export const addOrUpdateBlog = createAsyncThunk(
  "data/addOrUpdateBlog",
  async (blog) => {
    if (blog._id) {
      const res = await axios.put(`${backendUrl}/blog/update/${blog._id}`, {
        title: blog.title,
        author: blog.postedBy,
        content: blog.description,
        imageUrl: blog.imageUrl,
      });
      return res.data.blog;
    } else {
      const res = await axios.post(`${backendUrl}/blog/save`, {
        title: blog.title,
        author: blog.postedBy,
        content: blog.description,
        imageUrl: blog.imageUrl,
      });
      return res.data.blog;
    }
  }
);

export const deleteBlogData = createAsyncThunk(
  "data/deleteBlog",
  async (id) => {
    await axios.delete(`${backendUrl}/blog/delete/${id}`);
    return id;
  }
);

// -------------------- Cases Thunks --------------------
export const fetchCasesData = createAsyncThunk("data/fetchCases", async () => {
  const response = await axios.get(`${backendUrl}/case/getall`);
  return response.data;
});

export const addOrUpdateCase = createAsyncThunk(
  "data/addOrUpdateCase",
  async (caseItem) => {
    if (caseItem._id) {
      // Update
      const res = await axios.put(`${backendUrl}/case/update/${caseItem._id}`, {
        title: caseItem.title,
        description: caseItem.description,
        imageUrl: caseItem.imageUrl,
      });
      return res.data.case;
    } else {
      // Add
      const res = await axios.post(`${backendUrl}/case/save`, {
        title: caseItem.title,
        description: caseItem.description,
        imageUrl: caseItem.imageUrl,
      });
      return res.data.case;
    }
  }
);

export const deleteCaseData = createAsyncThunk(
  "data/deleteCase",
  async (id) => {
    await axios.delete(`${backendUrl}/case/delete/${id}`);
    return id;
  }
);

// -------------------- Other Thunks --------------------
export const fetchTeamData = createAsyncThunk("data/fetchTeam", async () => {
  const response = await axios.get(`${backendUrl}/team/getall`);
  return response.data?.payload;
});

export const fetchGalleryData = createAsyncThunk(
  "data/fetchGallery",
  async () => {
    const response = await axios.get(`${backendUrl}/gallery/getall`);
    return response.data;
  }
);

// -------------------- Initial State --------------------
const initialState = {
  blogData: [],
  casesData: [],
  teamData: [],
  galleryData: [],
  status: null,
  error: null,
};

// -------------------- Slice --------------------
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Blog
    builder
      .addCase(fetchBlogData.pending, (state) => { state.status = "loading"; })
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.status = "success";
        state.blogData = action.payload;
      })
      .addCase(fetchBlogData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addOrUpdateBlog.pending, (state) => { state.status = "loading"; })
      .addCase(addOrUpdateBlog.fulfilled, (state, action) => {
        state.status = "success";
        const updatedBlog = action.payload;
        const index = state.blogData.findIndex((b) => b._id === updatedBlog._id);
        if (index !== -1) state.blogData[index] = updatedBlog;
        else state.blogData.unshift(updatedBlog);
      })
      .addCase(addOrUpdateBlog.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBlogData.pending, (state) => { state.status = "loading"; })
      .addCase(deleteBlogData.fulfilled, (state, action) => {
        state.status = "success";
        state.blogData = state.blogData.filter((b) => b._id !== action.payload);
      })
      .addCase(deleteBlogData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Cases
    builder
      .addCase(fetchCasesData.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCasesData.fulfilled, (state, action) => {
        state.status = "success";
        state.casesData = action.payload;
      })
      .addCase(fetchCasesData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addOrUpdateCase.pending, (state) => { state.status = "loading"; })
      .addCase(addOrUpdateCase.fulfilled, (state, action) => {
        state.status = "success";
        const updatedCase = action.payload;
        const index = state.casesData.findIndex((c) => c._id === updatedCase._id);
        if (index !== -1) state.casesData[index] = updatedCase;
        else state.casesData.unshift(updatedCase);
      })
      .addCase(addOrUpdateCase.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteCaseData.pending, (state) => { state.status = "loading"; })
      .addCase(deleteCaseData.fulfilled, (state, action) => {
        state.status = "success";
        state.casesData = state.casesData.filter((c) => c._id !== action.payload);
      })
      .addCase(deleteCaseData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Team
    builder
      .addCase(fetchTeamData.pending, (state) => { state.status = "loading"; })
      .addCase(fetchTeamData.fulfilled, (state, action) => {
        state.status = "success";
        state.teamData = action.payload;
      })
      .addCase(fetchTeamData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Gallery
    builder
      .addCase(fetchGalleryData.pending, (state) => { state.status = "loading"; })
      .addCase(fetchGalleryData.fulfilled, (state, action) => {
        state.status = "success";
        state.galleryData = action.payload;
      })
      .addCase(fetchGalleryData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

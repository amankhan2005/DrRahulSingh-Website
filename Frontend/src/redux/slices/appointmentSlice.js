 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKENDURL;

// -------------------- Thunks --------------------

// Fetch all appointments (Admin dashboard)
export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async () => {
    const res = await axios.get(`${backendUrl}/appointment/getall`);
    return res.data.data; // backend me appointments "data" key me hain
  }
);

// Create new appointment (User form)
export const createAppointment = createAsyncThunk(
  "appointments/createAppointment",
  async (appointment) => {
    const res = await axios.post(`${backendUrl}/appointment/create`, appointment);
    return res.data.data;
  }
);

// Delete appointment (Admin)
export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (id) => {
    await axios.delete(`${backendUrl}/appointment/delete/${id}`);
    return id;
  }
);

// -------------------- Initial State --------------------
const initialState = {
  list: [],
  status: null,
  error: null,
};

// -------------------- Slice --------------------
const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchAppointments.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create
      .addCase(createAppointment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.status = "success";
        state.list.unshift(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Delete
      .addCase(deleteAppointment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.status = "success";
        state.list = state.list.filter((a) => a._id !== action.payload);
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default appointmentSlice.reducer;

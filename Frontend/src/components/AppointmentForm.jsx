 import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../redux/slices/dataslice";
import Swal from "sweetalert2";
import { specialities } from "../SpecilitesData.jsx";

function AppointmentForm() {
  const [departments, setDepartments] = useState(
    specialities.map((speciality) => speciality.title)
  );
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDepartmentChange = (e) => {
    const selectedDept = e.target.value;
    setSelectedDepartment(selectedDept);
    setFormData({ ...formData, department: selectedDept });
  };

  const backendUrl = import.meta.env.VITE_BACKENDURL;

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";

    if (!formData.email) {
      errors.email = "Email is required.";
    } else {
      const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
      if (!emailPattern.test(formData.email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.department) errors.department = "Department is required.";
    if (!formData.date) errors.date = "Date is required.";
    if (!formData.time) errors.time = "Time is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const formattedData = {
        department: formData.department,
        patientName: formData.name,
        mobileNo: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
      };

      setLoading(true);

      await axios.post(`${backendUrl}/inquiry/save`, formattedData);

      Swal.fire({
        title: "Success!",
        text: "Appointment booked successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        department: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
      });
      setFormErrors({});
      setSelectedDepartment("");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error booking appointment. Try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white md:p-8 px-3 py-4 pt-6 shadow-lg rounded-lg border border-gray-200">
      <h3 className="md:text-3xl text-2xl text-primary font-bold md:text-gray-800">
        Book Appointment
      </h3>
      {loading && <p className="text-blue-500">Processing...</p>}

      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.name}
        />
        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Enter 10-digit phone number"
          pattern="[0-9]{10}"
          maxLength="10"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.phone}
        />
        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border w-full border-gray-300 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

        {/* Department */}
        <select
          name="department"
          className="border border-gray-300 p-3 rounded-lg"
          onChange={handleDepartmentChange}
          value={formData.department}
        >
          <option value="" disabled>
            Select Department
          </option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        {formErrors.department && (
          <p className="text-red-500">{formErrors.department}</p>
        )}

        {/* Date */}
        <input
          type="date"
          name="date"
          min={new Date().toISOString().split("T")[0]}
          className="border border-gray-300 w-full p-3 rounded-lg"
          onChange={handleChange}
          value={formData.date}
        />
        {formErrors.date && <p className="text-red-500">{formErrors.date}</p>}

        {/* Time */}
        <select
          name="time"
          className="border border-gray-300 w-full p-3 rounded-lg"
          onChange={handleChange}
          value={formData.time}
        >
          <option value="">Select Time</option>
          {[...Array(12)].map((_, i) => (
            <React.Fragment key={i}>
              <option value={`${i + 1} AM`}>{i + 1} AM</option>
              <option value={`${i + 1} PM`}>{i + 1} PM</option>
            </React.Fragment>
          ))}
        </select>
        {formErrors.time && <p className="text-red-500">{formErrors.time}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-800 cursor-pointer transition duration-300"
          disabled={loading}
        >
          {loading ? "Processing..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;

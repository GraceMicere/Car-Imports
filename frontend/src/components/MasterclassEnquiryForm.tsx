import React, { useState } from "react";
import { sendMasterclassEnquiry } from "../services/api";

const MasterclassEnquiryForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await sendMasterclassEnquiry(formData);
      setSuccess(true);
      setFormData({ full_name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 max-w-lg mx-auto mt-10 transition-colors duration-300">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        Do you want to enroll in our Masterclass?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
        Fill out the form below to send an enrollment request.
      </p>

      {success && (
        <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 p-3 rounded mb-4 text-center">
          ✅ Request sent successfully!
        </div>
      )}
      {error && (
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-3 rounded mb-4 text-center">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
          required
        />
        <textarea
          name="message"
          placeholder="Message body"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
          rows={3}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-lg transition-colors duration-300"
        >
          {loading ? "Sending..." : "Send Enroll Request"}
        </button>
      </form>
    </div>
  );
};

export default MasterclassEnquiryForm;

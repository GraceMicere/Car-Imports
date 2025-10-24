import { useState } from "react";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/enquiries/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your enquiry has been sent successfully!");
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("There was an error sending your enquiry. Please try again.");
      }
    } catch (error) {
      console.log("Error submitting enquiry:", error);
      alert("There was an error sending your enquiry. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 rounded-xl shadow-md transition-colors duration-300"
    >
      <div>
        <label className="block font-semibold mb-2">Full Name</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring focus:ring-primary/40 transition-colors duration-300"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring focus:ring-primary/40 transition-colors duration-300"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+254 700 000 000"
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring focus:ring-primary/40 transition-colors duration-300"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Inquiry about vehicle import"
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring focus:ring-primary/40 transition-colors duration-300"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Please describe your vehicle import needs, timeline, and any specific requirements..."
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring focus:ring-primary/40 transition-colors duration-300"
          required
        ></textarea>
      </div>

      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default EnquiryForm;

import React, { useState } from "react";

interface CarInventoryEnquiryProps {
  car: any;
  onClose: () => void;
}

const CarInventoryEnquiry: React.FC<CarInventoryEnquiryProps> = ({ car, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/enquiries/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          car: car.id,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(onClose, 2000);
      } else {
        alert("❌ Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Network error. Try again later.");
    }

    setSubmitting(false);
  };

  return (
    <div className="relative bg-white rounded-xl p-6 max-w-lg w-full shadow-lg">
      {/* ✅ Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700 
                   hover:bg-primary hover:text-white transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
        aria-label="Close"
      >
        &times;
      </button>

      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Get a Quote for {car.name}
      </h2>

      <div className="flex gap-4 mb-4">
        <img
          src={car.images?.[0] || "/placeholder-car.jpg"}
          alt={car.name}
          className="w-40 h-28 object-cover rounded-lg"
        />
        <div>
          <p className="font-semibold text-gray-700">
            {car.make} {car.model} ({car.year})
          </p>
          <p className="text-gray-600">
            Price: <strong>KES {Number(car.price).toLocaleString()}</strong>
          </p>
        </div>
      </div>

      {success ? (
        <p className="text-green-600 text-center">✅ Enquiry sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
          >
            {submitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
};

export default CarInventoryEnquiry;

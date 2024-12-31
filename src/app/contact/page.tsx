
"use client"; // Add this at the top of the file

import React, { useState, ChangeEvent, FormEvent } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was an issue sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Contact Us</h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows={4}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-700"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="text-center mt-8">
        <p className="text-gray-700">Or reach us at:</p>
        <p className="text-teal-600 font-medium">+92-315-4643788</p>
        <p className="text-teal-600 font-medium">hussnainsiyal626@gmail.com</p>
      </div>
    </div>
  );
}

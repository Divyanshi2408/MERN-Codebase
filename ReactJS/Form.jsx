import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Invalid email format";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

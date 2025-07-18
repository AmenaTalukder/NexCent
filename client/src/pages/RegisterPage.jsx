import React, { useState } from "react";
import "../styles/Registerpage.scss";
import { FiUpload } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null
  });

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light"
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match", toastConfig);
    }

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        body: data
      });
      const result = await res.json();
      if (res.ok) {
        toast.success(result.message, toastConfig);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error(result.message || "Registration failed", toastConfig);
      }
    } catch (err) {
      toast.error("Registration failed", toastConfig);
      console.error(err);
    }
  };

  return (
    <div className="register">
      <div className="content_register">
        <form className="register_form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            hidden
          />
          <label htmlFor="image" className="image">
            <FiUpload className="upload_icon" /> Choose Image
          </label>
          {formData.image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(formData.image)} alt="Preview" />
              <p className="image-name">Selected file: {formData.image.name}</p>
            </div>
          )}

          <button type="submit">Register</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterPage;

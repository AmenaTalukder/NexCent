import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.scss";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    if (!formData.email) {
      return toast.error("Please enter your email", toastConfig);
    }

    if (!formData.password) {
      return toast.error("Please enter your password", toastConfig);
    }

    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (res.ok) {
        toast.success(result.message, toastConfig);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error(result.message || "Login failed", toastConfig);
      }
    } catch (err) {
      toast.error("Login failed", toastConfig);
      console.error(err);
    }
  };

  return (
    <div className="login">
      <div className="content_login">
        <form className="login_form" onSubmit={handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;

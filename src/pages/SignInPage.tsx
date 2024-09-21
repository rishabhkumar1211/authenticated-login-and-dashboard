import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { authService } from "../services/authServices";
import { useAuth } from "../services/useAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "eve.holt@reqres.in",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = async () => {
    try {
      const response = await authService.signIn(formData);
      console.log("User authenticated:", response.data);
      navigate("/dashboard");
      login();
    } catch (error) {
      console.error("Error authenticating user:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Sign In
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Welcome back! Please sign in.
        </p>

        <form className="mt-6 space-y-6" noValidate>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            onClick={handleSignIn}
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-600 mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="text-center text-sm text-gray-600 mt-2">
            Don’t have an account?{" "}
            <RouterLink to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

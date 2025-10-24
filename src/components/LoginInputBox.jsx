// LoginBox.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { axiosInstance } from "../api/axios";
import EnroLinkImage from "../assets/enrolink-logo.png";
import { GoogleLogin } from "@react-oauth/google";

export const LoginBox = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Manual login function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Example: store token or handle session
        localStorage.setItem("token", response.data.token);
        navigate("/head/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(
        error.response?.data?.message || "Invalid email or password"
      );
    }
  };

  // Google login handler
  const handleGoogleSuccess = async (response) => {
    console.log("Google login success:", response);
    setErrorMessage("");
    
    try {
      // Extract the credential token from Google response
      const credential = response.credential;
      
      if (!credential) {
        setErrorMessage("Failed to get Google credential");
        return;
      }

      // Send the Google token to your backend
      const backendResponse = await axiosInstance.post("/auth", {
        token: credential
      });

      if (backendResponse.status === 200) {
        // Store any token or user data from backend
        if (backendResponse.data.token) {
          localStorage.setItem("token", backendResponse.data.token);
        }
        // Navigate to dashboard on successful login
        navigate("/head/dashboard");
      }
    } catch (error) {
      console.error("Google login backend error:", error);
      setErrorMessage(
        error.response?.data?.message || "Google authentication failed"
      );
    }
  };

  const handleGoogleFailure = (error) => {
    console.log("Google login failed:", error);
    setErrorMessage("Google login failed. Please try again.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-[2rem] shadow-lg h-[490px] w-[450px] bg-warm-white rounded-[10px]"
    >
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col gap-[1rem] desktop:w-[400px]">
          <img src={EnroLinkImage} alt="logo" className="w-[210px]" />
          <p className="text-raisin-black text-[1rem] font-semibold">
            Good day! Sir/Ma'am. Welcome to EnroLink!
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-t-0 border-y-0 border-b-[1px] border-cool-black-300 focus:outline-none desktop:w-[400px] laptop:w-[350px]"
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-t-0 border-y-0 border-b-[1px] border-cool-black-300 focus:outline-none desktop:w-[400px] laptop:w-[350px]"
            placeholder="Password"
            required
          />

          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}

          <Link to={"/head/dashboard"}>
            <button
              type="submit"
              className="bg-antique-ruby text-warm-white rounded laptop:p-2 desktop:w-[400px] laptop:w-[350px] cursor-pointer hover:bg-desire transition"
            >
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Google Login (visible, but not yet functional) */}
      <div className="flex flex-col items-center gap-2.5 desktop:w-[400px] laptop:w-[350px]">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />
      </div>
    </form>
  );
};

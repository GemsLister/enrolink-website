import { axiosInstance } from "../api/axios";
import { useState } from "react";

export const useSignUp = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (formData) => {
    setSuccess(false);
    setError(null);

    try {
      const res = await axiosInstance.post(`/signup`, formData);
      setSuccess(true);
      console.log(res);
    } catch (error) {
      setError(error);
      return null;
    }
  };

  return { signup, success, error };
};

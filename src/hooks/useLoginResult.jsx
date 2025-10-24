import { useState } from "react";
import { axiosInstance } from "../api/axios";

export const useLoginResult = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
 
  const loginResult = async (formData) => {
    setSuccess(false);
    setError(false);

    try {
        await axiosInstance.post('/login', formData);
        return { success: true };
    } catch (error) {
        return { error: true };
    }
  }
    return { loginResult, success, error };
};

import api from "./axios";

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", {
    username: email,   // 🔥 email mapped to username field
    password: password
  });
  return response.data;
};


export const sendOtp = (email) =>
  api.post(`/auth/forgot-password?email=${email}`);

export const resetPassword = (email, otp, newPassword) =>
  api.post(
    `/auth/reset-password?email=${email}&otp=${otp}&newPassword=${newPassword}`
  );
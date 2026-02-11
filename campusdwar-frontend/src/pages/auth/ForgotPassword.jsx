import { useState } from "react";
import { sendOtp, resetPassword } from "../../api/auth";
import "../../styles/forgot-password.css"; // ✅ add css

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSendOtp = async () => {
    try {
      await sendOtp(email);
      setMsg("OTP generated");
      setStep(2);
    } catch (err) {
      setMsg(err.response?.data || "Email not Registered");
    }
  };

  const handleReset = async () => {
    try {
      await resetPassword(email, otp, password);
      setMsg("Password reset successful");
    } catch (err) {
      setMsg(err.response?.data || "Reset failed");
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-wrapper">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtitle">
          Reset your password using OTP
        </p>

        {step === 1 && (
          <>
            <div className="forgot-group">
              <input
                type="email"
                placeholder="Registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="forgot-btn" onClick={handleSendOtp}>
              Generate OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="forgot-group">
              <input
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <div className="forgot-group">
              <input
                type="password"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="forgot-btn" onClick={handleReset}>
              Reset Password
            </button>
          </>
        )}

        {msg && <div className="forgot-msg">{msg}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;

// import StudentSidebar from "../../components/sidebar/StudentSidebar";
// import "../../styles/account-info.css";

// const AccountInfo = () => {
//   return (
//     <div className="dashboard">
//       <StudentSidebar />

//       <div className="account-content">
//         <h2>Account Information</h2>

//         {/* PERSONAL INFORMATION */}
//         <div className="info-box">
//           <h3>Personal Information</h3>
//           <div className="info-grid">
//             <Info label="Name" value="Harsh Mahajan" />
//             <Info label="PRN" value="PRN202400123" />
//             <Info label="Roll No" value="DAC-045" />
//             <Info label="Course" value="PG-DAC" />
//             <Info label="Department" value="Computer Science" />
//             <Info label="Semester" value="2" />
//             <Info label="Email" value="harsh@gmail.com" />
//             <Info label="Contact" value="9876543210" />
//             <Info label="Date of Birth" value="12-08-2002" />
//             <Info label="Gender" value="Male" />
//             <Info label="Blood Group" value="O+" />
//             <Info label="Status" value="Active" />
//           </div>
//         </div>

//         {/* EDUCATIONAL DETAILS */}
//         <div className="info-box">
//           <h3>Educational Details</h3>
//           <div className="info-grid">
//             <Info label="10th Board" value="CBSE" />
//             <Info label="10th Percentage" value="89%" />
//             <Info label="12th Board" value="HSC" />
//             <Info label="12th Percentage" value="85%" />
//             <Info label="Admission Year" value="2024" />
//             <Info label="Admission Type" value="CAP Round" />
//             <Info label="Category" value="OPEN" />
//           </div>
//         </div>

//         {/* FAMILY DETAILS */}
//         <div className="info-box">
//           <h3>Family Details</h3>
//           <div className="info-grid">
//             <Info label="Father Name" value="Mahajan Sir" />
//             <Info label="Father Mobile" value="9998887776" />
//             <Info label="Father Email" value="father@gmail.com" />
//             <Info label="Mother Name" value="Mrs. Mahajan" />
//           </div>
//         </div>

//         {/* ADDRESS DETAILS */}
//         <div className="info-box">
//           <h3>Address Details</h3>
//           <div className="info-grid">
//             <Info label="Address" value="Pune, Maharashtra" />
//             <Info label="City" value="Pune" />
//             <Info label="State" value="Maharashtra" />
//             <Info label="Pincode" value="411001" />
//           </div>
//         </div>

//         {/* EMERGENCY CONTACT */}
//         <div className="info-box">
//           <h3>Emergency Contact</h3>
//           <div className="info-grid">
//             <Info label="Contact Name" value="Uncle Mahajan" />
//             <Info label="Contact Number" value="9123456789" />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// const Info = ({ label, value }) => (
//   <div className="info-field">
//     <label>{label}</label>
//     <input type="text" value={value} readOnly />
//   </div>
// );

// export default AccountInfo;


import { useEffect, useState } from "react";
import { getMyAccountInfo, updateMyAccountInfo } from "../../api/student";
import "../../styles/account-info.css";
import { sendEmailOtp, verifyEmailOtp } from "../../api/student";


const AccountInfo = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [showEmailChange, setShowEmailChange] = useState(false);
const [newEmail, setNewEmail] = useState("");
const [otp, setOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);


  useEffect(() => {
    fetchAccountInfo();
  }, []);

  const fetchAccountInfo = () => {
    setLoading(true);
    getMyAccountInfo()
      .then((res) => {
        setStudent(res.data);
        setFormData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load account information");
        setLoading(false);
      });
  };
const handleSendOtp = async () => {
    try {
      await sendEmailOtp(newEmail.trim());
      setOtpSent(true);
      alert("OTP sent to new email");
    } catch {
      alert("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await verifyEmailOtp({ newEmail: newEmail.trim(), otp: otp.trim() });
      alert("Email updated successfully. Please login again.");

    localStorage.clear();
    window.location.href = "/login";
  } catch (err) {
    console.error("OTP Verification Error:", err);
    const msg = err.response?.data?.message || "Invalid OTP";
    alert(msg);
  }
};

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData(student);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(student);
    setError("");
  };

  /**
   * 🔒 VERY IMPORTANT
   * Only send fields that backend allows to update
   */
  const buildSafePayload = () => {
    return {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,

      fatherName: formData.fatherName,
      fatherMobile: formData.fatherMobile,
      fatherEmail: formData.fatherEmail,
      motherName: formData.motherName,

      emergencyContactName: formData.emergencyContactName,
      emergencyContactNumber: formData.emergencyContactNumber,

      gender: formData.gender,
      bloodGroup: formData.bloodGroup,

      admissionType: formData.admissionType,
      admissionYear: formData.admissionYear,
      category: formData.category,

      tenthBoard: formData.tenthBoard,
      tenthPercentage: formData.tenthPercentage,
      twelfthBoard: formData.twelfthBoard,
      twelfthPercentage: formData.twelfthPercentage,

      dateOfBirth: formData.dateOfBirth
    };
  };

  const handleSave = () => {
    setError("");
    const payload = buildSafePayload();
    
    // Attempt to handle common backend naming conventions
    const extendedPayload = {
        ...payload,
        dob: payload.dateOfBirth,       // Alternative key for Date of Birth
        blood_group: payload.bloodGroup, // Alternative key for Blood Group
        username: payload.email,         // Attempt: If backend uses username for email
        userid: payload.email,           // Attempt: Some legacy systems
    };

    console.log("Saving Student Data (Extended):", extendedPayload); // Debug log

    updateMyAccountInfo(extendedPayload)
      .then(() => {
        setStudent({ ...student, ...payload });
        setFormData({ ...student, ...payload });
        setIsEditing(false);
        alert("Account information updated successfully!");
      })
      .catch((err) => {
        console.error("Update failed:", err);
        const backendError = err.response?.data?.message || err.message || "Failed to update account information";
        setError(`Error: ${backendError}`);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!student) return <p>No student data found.</p>;

  return (
    
    <div className="dashboard">
      <div className="account-content">
        <div
          className="header-actions"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <h2>Account Information</h2>

          {!isEditing ? (
            <button
              className="btn-edit"
              onClick={handleEditToggle}
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Edit Info
            </button>
          ) : (
            <div className="action-buttons">
              <button
                className="btn-save"
                onClick={handleSave}
                style={{
                  padding: "8px 16px",
                  marginRight: "10px",
                  cursor: "pointer",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Save
              </button>
              <button
                className="btn-cancel"
                onClick={handleCancel}
                style={{
                  padding: "8px 16px",
                  cursor: "pointer",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
{/* EMAIL CHANGE MODAL */}
          <div className="info-box">
             <h3>Email Settings</h3>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                   <label style={{ fontSize: '13px', color: '#555' }}>Current Email</label>
                   <p style={{ fontWeight: '500', color: '#333' }}>{student.email}</p>
                </div>
                <button 
                  className="btn-edit" 
                  style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  onClick={() => setShowEmailChange(true)}
                >
                  Change Email
                </button>
             </div>
          </div>

          {showEmailChange && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Change Email</h3>
                <p style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
                    {otpSent ? `Enter the OTP sent to ${newEmail}` : "Enter your new email address"}
                </p>

                {!otpSent ? (
                    <>
                        <input
                          type="email"
                          placeholder="New Email Address"
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                        />
                        <button className="btn-primary" onClick={handleSendOtp}>Send OTP</button>
                    </>
                ) : (
                    <>
                        <input
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <button className="btn-success" onClick={handleVerifyOtp}>
                          Verify & Update
                        </button>
                    </>
                )}
                <button className="btn-close" onClick={() => {
                    setShowEmailChange(false);
                    setOtpSent(false);
                    setOtp("");
                    setNewEmail("");
                }}>Close</button>
              </div>
            </div>
          )}

        {/* PERSONAL INFORMATION */}
        <div className="info-box">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <Info label="Name" value={formData.name} onChange={(e) => handleInputChange(e, "name")} isEditable={isEditing} />
            <Info label="PRN" value={formData.prn} />
            <Info label="Roll No" value={formData.rollNo} />
            <Info label="Course" value={formData.course} />
            <Info label="Department" value={formData.department} />
            <Info label="Semester" value={formData.semester} />


            <Info label="Contact" value={formData.contact} onChange={(e) => handleInputChange(e, "contact")} isEditable={isEditing} />
            <Info label="Date of Birth" value={formData.dateOfBirth} onChange={(e) => handleInputChange(e, "dateOfBirth")} isEditable={isEditing} />
            <Info label="Gender" value={formData.gender} onChange={(e) => handleInputChange(e, "gender")} isEditable={isEditing} />
            <Info label="Blood Group" value={formData.bloodGroup} onChange={(e) => handleInputChange(e, "bloodGroup")} isEditable={isEditing} />
            <Info label="Status" value={formData.status} />
          </div>
        </div>

        {/* EDUCATIONAL DETAILS */}
        <div className="info-box">
          <h3>Educational Details</h3>
          <div className="info-grid">
            <Info label="10th Board" value={formData.tenthBoard} onChange={(e) => handleInputChange(e, "tenthBoard")} isEditable={isEditing} />
            <Info label="10th Percentage" value={formData.tenthPercentage} onChange={(e) => handleInputChange(e, "tenthPercentage")} isEditable={isEditing} />
            <Info label="12th Board" value={formData.twelfthBoard} onChange={(e) => handleInputChange(e, "twelfthBoard")} isEditable={isEditing} />
            <Info label="12th Percentage" value={formData.twelfthPercentage} onChange={(e) => handleInputChange(e, "twelfthPercentage")} isEditable={isEditing} />
            <Info label="Admission Year" value={formData.admissionYear} onChange={(e) => handleInputChange(e, "admissionYear")} isEditable={isEditing} />
            <Info label="Admission Type" value={formData.admissionType} onChange={(e) => handleInputChange(e, "admissionType")} isEditable={isEditing} />
            <Info label="Category" value={formData.category} onChange={(e) => handleInputChange(e, "category")} isEditable={isEditing} />
          </div>
        </div>

        {/* FAMILY DETAILS */}
        <div className="info-box">
          <h3>Family Details</h3>
          <div className="info-grid">
            <Info label="Father Name" value={formData.fatherName} onChange={(e) => handleInputChange(e, "fatherName")} isEditable={isEditing} />
            <Info label="Father Mobile" value={formData.fatherMobile} onChange={(e) => handleInputChange(e, "fatherMobile")} isEditable={isEditing} />
            <Info label="Father Email" value={formData.fatherEmail} onChange={(e) => handleInputChange(e, "fatherEmail")} isEditable={isEditing} />
            <Info label="Mother Name" value={formData.motherName} onChange={(e) => handleInputChange(e, "motherName")} isEditable={isEditing} />
          </div>
        </div>

        {/* ADDRESS DETAILS */}
        <div className="info-box">
          <h3>Address Details</h3>
          <div className="info-grid">
            <Info label="Address" value={formData.address} onChange={(e) => handleInputChange(e, "address")} isEditable={isEditing} />
            <Info label="City" value={formData.city} onChange={(e) => handleInputChange(e, "city")} isEditable={isEditing} />
            <Info label="State" value={formData.state} onChange={(e) => handleInputChange(e, "state")} isEditable={isEditing} />
            <Info label="Pincode" value={formData.pincode} onChange={(e) => handleInputChange(e, "pincode")} isEditable={isEditing} />
          </div>
        </div>

        {/* EMERGENCY CONTACT */}
        <div className="info-box">
          <h3>Emergency Contact</h3>
          <div className="info-grid">
            <Info label="Contact Name" value={formData.emergencyContactName} onChange={(e) => handleInputChange(e, "emergencyContactName")} isEditable={isEditing} />
            <Info label="Contact Number" value={formData.emergencyContactNumber} onChange={(e) => handleInputChange(e, "emergencyContactNumber")} isEditable={isEditing} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value, onChange, isEditable }) => (
  <div className="info-field">
    <label>{label}</label>
    <input
      type="text"
      value={value || ""}
      readOnly={!isEditable}
      onChange={onChange}
      style={{
        backgroundColor: isEditable ? "#fff" : "#f9f9f9",
        border: isEditable ? "1px solid #ccc" : "1px solid transparent",
        padding: "5px",
        borderRadius: "4px",
      }}
    />
  </div>
);

export default AccountInfo;

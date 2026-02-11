// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/login.css";
// import loginImage from "../../assets/images/login_.png";

// const Login = () => {
//   const navigate = useNavigate();

//   const [role, setRole] = useState("Student");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // TEMP logic (replace with backend later)
//     if (!username || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (role === "Student") {
//   navigate("/student/account");


//     } else if (role === "Faculty") {
//       navigate("/faculty/dashboard");
//     } else {
//       alert("Admin dashboard not implemented yet");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       {/* Illustration */}
//       <div className="login-illustration">
//         <img src={loginImage} alt="Login Illustration" />
//       </div>

//       {/* Login Form */}
//       <div className="login-card">
//         <div className="login-title">Welcome Back!</div>
//         <div className="login-subtitle">
//           Login to continue to your CollegeSys dashboard
//         </div>

//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label>Login As</label>
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option>Student</option>
//               <option>Faculty</option>
//               <option>Admin</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Enrollment / Email</label>
//             <input
//               type="text"
//               placeholder="Enter enrollment or email"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button className="login-btn" type="submit">
//             Login
//           </button>
//         </form>

//         <div className="login-footer">
//           <a href="#">Forgot password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";
// import "../../styles/login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("STUDENT");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await api.post("/auth/login", {
//         email: email,
//         password: password,
//       });

//       const user = response.data;

//       // save logged in user
//       localStorage.setItem("user", JSON.stringify(user));

//       // role based navigation
//       if (user.role === "ROLE_STUDENT") {
//         navigate("/student");
//       } else if (user.role === "ROLE_FACULTY") {
//         navigate("/faculty");
//       } else {
//         setError("Invalid role");
//       }

//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-wrapper">

//         {/* Illustration Section */}
//         <div className="login-illustration">
//           <img src="/images/login_.png" alt="Login" />
//         </div>

//         {/* Login Form */}
//         <div className="login-card">
//           <div className="login-title">Welcome Back!</div>
//           <div className="login-subtitle">
//             Login to continue to your dashboard
//           </div>

//           {error && <div className="login-error">{error}</div>}

//           <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <label>Login As</label>
//               <select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//               >
//                 <option value="STUDENT">Student</option>
//                 <option value="FACULTY">Faculty</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button className="login-btn" type="submit">
//               Login
//             </button>
//           </form>

//           <div className="login-footer">
//             <a href="#">Forgot password?</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../api/axios";
// import "../../styles/login.css";
// import loginImage from "../../assets/images/login_.png";

// const Login = () => {
//   const navigate = useNavigate();

//   // 🔐 Login credentials
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ⚠️ Role dropdown is UI-only (NOT used for auth)
//   const [uiRole, setUiRole] = useState("STUDENT");

//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Please fill all fields");
//       return;
//     }

//     try {
//       // 🔥 BACKEND AUTHENTICATION
//       const response = await api.post("/auth/login", {
//         email: email,          // must match LoginRequest field
//         password: password,
//       });

//       const user = response.data;

//       // 🔐 Save auth details
//       localStorage.setItem("token", user.token);
//       localStorage.setItem("user", JSON.stringify(user));

//       // 🔥 ROLE-BASED ROUTING (FROM BACKEND ONLY)
//       if (user.role === "ROLE_STUDENT") {
//         navigate("/student");
//       } else if (user.role === "ROLE_FACULTY") {
//         navigate("/faculty");
//       } else if (user.role === "ROLE_ADMIN") {
//         navigate("/admin");
//       } else {
//         setError("Unauthorized role");
//       }

//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       {/* Illustration */}
//       <div className="login-illustration">
//         <img src={loginImage} alt="Login Illustration" />
//       </div>

//       {/* Login Card */}
//       <div className="login-card">
//         <div className="login-title">Welcome Back!</div>
//         <div className="login-subtitle">
//           Login to continue to your dashboard
//         </div>

//         {error && <div className="login-error">{error}</div>}

//         <form onSubmit={handleLogin}>
//           {/* ⚠️ UI-only dropdown (ignored by backend) */}
//           <div className="form-group">
//             <label>Login As</label>
//             <select
//               value={uiRole}
//               onChange={(e) => setUiRole(e.target.value)}
//             >
//               <option value="STUDENT">Student</option>
//               <option value="FACULTY">Faculty</option>
//               <option value="ADMIN">Admin</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button className="login-btn" type="submit">
//             Login
//           </button>
//         </form>

//         <div className="login-footer">
//           <a href="#">Forgot password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import "../../styles/login.css";
import loginImage from "../../assets/images/login_.png";
import { Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  // Login inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 Role selected by user (THIS WILL BE VALIDATED)
  const [selectedRole, setSelectedRole] = useState("STUDENT");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      // 🔐 Backend authentication
      const response = await api.post("/auth/login", {
        email: email,
        password: password,
      });

      const user = response.data;
      const backendRole = user.role; // e.g. ROLE_STUDENT

      // 🔒 VALIDATE ROLE MATCH
      const expectedRole = `ROLE_${selectedRole}`;

      if (backendRole !== expectedRole) {
        setError(
          `You are not authorized to login as ${selectedRole.toLowerCase()}`
        );
        return;
      }

      // ✅ Role matches → allow login
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate based on role
      if (backendRole === "ROLE_STUDENT") {
        navigate("/student");
      } else if (backendRole === "ROLE_FACULTY") {
        navigate("/faculty");
      } else if (backendRole === "ROLE_ADMIN") {
        navigate("/admin");
      }

    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Illustration */}
      <div className="login-illustration">
        <img src={loginImage} alt="Login Illustration" />
      </div>

      {/* Login Card */}
      <div className="login-card">
        <div className="login-title">Welcome Back!</div>
        <div className="login-subtitle">
          Login to continue to your dashboard
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleLogin}>
          {/* 🔒 ROLE SELECTION (ENFORCED) */}
          <div className="form-group">
            <label>Login As</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="STUDENT">Student</option>
              <option value="FACULTY">Faculty</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <div className="login-footer">
  <Link to="/forgot-password">Forgot password?</Link>
</div>

      </div>
    </div>
  );
};

export default Login;

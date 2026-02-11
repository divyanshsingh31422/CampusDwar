
import "../../styles/faculty-info.css";
import { useEffect, useState } from "react";
import { getAllFaculties } from "../../api/student";

const FacultyInfo = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Demo image (using a professional placeholder)
  const DEMO_IMAGE = "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?w=740&t=st=1708453489~exp=1708454089~hmac=565565384668865654564654"; 
  // OR use a reliable placeholder service if preferred: "https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=200&name="

  useEffect(() => {
    getAllFaculties()
      .then(res => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "30px", background: "#f6f8fb", minHeight: "100vh" }}>
      <h2 className="page-header">Faculty Directory</h2>

      {loading ? (
        <div className="loading-state">Loading faculty members...</div>
      ) : list.length === 0 ? (
        <div className="empty-state">No faculty found</div>
      ) : (
        <div className="faculty-grid">
          {list.map(f => (
            <div key={f.facultyId} className="faculty-card">
              <div className="faculty-image-container">
                <img 
                    src={f.imageUrl || "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"} 
                    alt={f.name} 
                    className="faculty-image"
                    onError={(e) => { e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"; }} 
                />
              </div>
              
              <div className="faculty-details">
                <h3 className="faculty-name">{f.name}</h3>
                <div className="faculty-dept">{f.department || "Faculty"}</div>
                
                <div className="faculty-contact">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <a href={`mailto:${f.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {f.email}
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    {f.phoneNo || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacultyInfo;

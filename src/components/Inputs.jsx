// Inputs.jsx
function Inputs({ activeSection, handleChange, formData }) {
  console.log("Inputs formData:", formData);
  return (
    <div className="inputs-container">
      {activeSection === "profile" && (
        <div>
          <h2>Profile</h2>
          <input
            placeholder="Name"
            value={formData.profile.name}
            onChange={(e) => handleChange("profile", "name", e.target.value)}
          />
          <input
            placeholder="Email"
            value={formData.profile.email}
            onChange={(e) => handleChange("profile", "email", e.target.value)}
          />
          <input
            placeholder="Phone Number"
            value={formData.profile.phone}
            onChange={(e) => handleChange("profile", "phone", e.target.value)}
          />
          <input
            placeholder="Location"
            value={formData.profile.location}
            onChange={(e) =>
              handleChange("profile", "location", e.target.value)
            }
          />
        </div>
      )}
      {activeSection === "education" && (
        <div>
          <h2>Education</h2>
          <input
            placeholder="School"
            value={formData.education.school}
            onChange={(e) =>
              handleChange("education", "school", e.target.value)
            }
          />
          <input
            placeholder="Degree Title"
            value={formData.education.degree}
            onChange={(e) =>
              handleChange("education", "degree", e.target.value)
            }
          />
        </div>
      )}
      {activeSection === "work" && (
        <div>
          <h2>Work</h2>
          <input
            placeholder="Company"
            value={formData.work.company}
            onChange={(e) => handleChange("work", "company", e.target.value)}
          />
          <input
            placeholder="Position"
            value={formData.work.position}
            onChange={(e) => handleChange("work", "position", e.target.value)}
          />
          <input
            type="date"
            value={formData.work.startData}
            onChange={(e) => handleChange("work", "startDate", e.target.value)}
          />
          <input
            type="date"
            value={formData.work.endData}
            onChange={(e) => handleChange("work", "endDate", e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default Inputs;

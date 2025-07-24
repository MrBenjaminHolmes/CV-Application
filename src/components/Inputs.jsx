function Inputs({
  activeSection,
  handleChange,
  handleAddEntry,
  handleDeleteEntry,
  formData,
}) {
  return (
    <div className="inputs-container">
      {activeSection === "profile" && (
        <div>
          <h2>Profile</h2>

          <label>Name</label>
          <input
            placeholder="Enter your full name"
            value={formData.profile.name}
            onChange={(e) => handleChange("profile", "name", e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder="Enter your email"
            value={formData.profile.email}
            onChange={(e) => handleChange("profile", "email", e.target.value)}
          />

          <label>Phone Number</label>
          <input
            placeholder="Enter your phone number"
            value={formData.profile.phone}
            onChange={(e) => handleChange("profile", "phone", e.target.value)}
          />

          <label>Location</label>
          <input
            placeholder="Enter your location"
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
          {formData.education.map((entry, index) => (
            <div key={index} className="education-entry">
              <label>Degree Title</label>
              <input
                placeholder="e.g., BSc in Computer Science"
                value={entry.degree}
                onChange={(e) =>
                  handleChange("education", index, "degree", e.target.value)
                }
              />

              <label>School</label>
              <input
                placeholder="e.g., University of Example"
                value={entry.school}
                onChange={(e) =>
                  handleChange("education", index, "school", e.target.value)
                }
              />

              <label>Year of Graduation</label>
              <input
                type="date"
                value={entry.yearOfGraduation || ""}
                onChange={(e) =>
                  handleChange(
                    "education",
                    index,
                    "yearOfGraduation",
                    e.target.value
                  )
                }
              />
              <button
                className="deleteBttn"
                onClick={() => handleDeleteEntry("education", index)}
              >
                X
              </button>
            </div>
          ))}

          <button onClick={() => handleAddEntry("education")}>
            Add Education
          </button>
        </div>
      )}

      {activeSection === "work" && (
        <div>
          <h2>Work</h2>
          {formData.work.map((entry, index) => (
            <div key={index} className="work-entry">
              <label>Company</label>
              <input
                placeholder="Company name"
                value={entry.company}
                onChange={(e) =>
                  handleChange("work", index, "company", e.target.value)
                }
              />

              <label>Position</label>
              <input
                placeholder="Your job title"
                value={entry.position}
                onChange={(e) =>
                  handleChange("work", index, "position", e.target.value)
                }
              />

              <label>Start Date</label>
              <input
                type="date"
                value={entry.startDate}
                onChange={(e) =>
                  handleChange("work", index, "startDate", e.target.value)
                }
              />

              <label>End Date</label>
              <input
                type="date"
                value={entry.endDate}
                onChange={(e) =>
                  handleChange("work", index, "endDate", e.target.value)
                }
              />
              <button
                className="deleteBttn"
                onClick={() => handleDeleteEntry("work", index)}
              >
                X
              </button>
            </div>
          ))}

          <button onClick={() => handleAddEntry("work")}>Add Job</button>
        </div>
      )}
      {activeSection == "notes" && (
        <div>
          <h2>Notes</h2>

          <label>Addtional Info</label>
          <textarea
            placeholder="Enter Any Additional Information"
            value={formData.notes.additional}
            onChange={(e) =>
              handleChange("notes", "additional", e.target.value)
            }
          />
        </div>
      )}
      {activeSection == "skills" && (
        <div>
          <h2>Skills</h2>
          {formData.skills.map((entry, index) => (
            <div key={index} className="skill-entry">
              <input
                placeholder="eg:Javascript"
                value={entry.skill}
                onChange={(e) =>
                  handleChange("skills", index, "skill", e.target.value)
                }
              />

              <button
                className="deleteBttn"
                onClick={() => handleDeleteEntry("skills", index)}
              >
                X
              </button>
            </div>
          ))}

          <button onClick={() => handleAddEntry("skills")}>Add Skills</button>
        </div>
      )}
    </div>
  );
}

export default Inputs;

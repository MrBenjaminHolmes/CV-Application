// App.jsx
import Sidebar from "./Sidebar.jsx";
import Display from "./Display.jsx";
import "../styles/App.css";
import fakeData from "../assets/fakeData.js";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("profile");

  const [formData, setFormData] = useState(fakeData);

  const handleChange = (section, indexOrField, fieldOrValue, maybeValue) => {
    if (section === "profile" || section === "notes") {
      const field = indexOrField;
      const value = fieldOrValue;
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    } else {
      const index = indexOrField;
      const field = fieldOrValue;
      const value = maybeValue;
      setFormData((prev) => ({
        ...prev,
        [section]: prev[section].map((entry, i) =>
          i === index ? { ...entry, [field]: value } : entry
        ),
      }));
    }
  };

  const handleAddEntry = (section) => {
    const emptyEntry =
      section === "education"
        ? { degree: "", school: "", yearOfGraduation: "" }
        : { company: "", position: "", startDate: "", endDate: "" };

    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], emptyEntry],
    }));
  };

  const handleDeleteEntry = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleChange={handleChange}
        handleAddEntry={handleAddEntry}
        handleDeleteEntry={handleDeleteEntry}
        formData={formData}
      />

      <Display formData={formData} />
    </div>
  );
}

export default App;

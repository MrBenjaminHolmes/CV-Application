// App.jsx
import Sidebar from "./Sidebar.jsx";
import Display from "./Display.jsx";
import Inputs from "./Inputs.jsx";
import "../styles/App.css";
import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("profile");
  const [formData, setFormData] = useState({
    profile: { name: "", email: "", phone: "", location: "" },
    education: { school: "", degree: "" },
    work: { company: "", position: "", startDate: "", endData: "" },
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };
  return (
    <div className="app-container">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleChange={handleChange}
      />

      <Inputs
        activeSection={activeSection}
        handleChange={handleChange}
        formData={formData}
      />

      <Display formData={formData} />
    </div>
  );
}

export default App;

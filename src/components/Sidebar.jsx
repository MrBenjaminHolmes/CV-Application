import SidebarButton from "./sidebarButton";
import personIcon from "../assets/person.svg";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";
import addNoteIcon from "../assets/addNote.svg";
import skillsIcon from "../assets/skills.svg";
import Inputs from "./Inputs";
import "../styles/App.css";

function Sidebar({
  activeSection,
  setActiveSection,
  handleChange,
  handleAddEntry,
  handleDeleteEntry,
  formData,
}) {
  return (
    <div id="sideBar">
      <h1>CV Generator</h1>

      <div id="icons">
        <SidebarButton
          icon={personIcon}
          alt="Profile"
          isActive={activeSection === "profile"}
          onClick={() => setActiveSection("profile")}
        />
        <SidebarButton
          icon={schoolIcon}
          alt="Education"
          isActive={activeSection === "education"}
          onClick={() => setActiveSection("education")}
        />
        <SidebarButton
          icon={workIcon}
          alt="Work"
          isActive={activeSection === "work"}
          onClick={() => setActiveSection("work")}
        />
        <SidebarButton
          icon={addNoteIcon}
          alt="addNote"
          isActive={activeSection === "notes"}
          onClick={() => setActiveSection("notes")}
        />
        <SidebarButton
          icon={skillsIcon}
          alt="addSkills"
          isActive={activeSection === "skills"}
          onClick={() => setActiveSection("skills")}
        />
      </div>

      <Inputs
        activeSection={activeSection}
        handleChange={handleChange}
        handleAddEntry={handleAddEntry}
        handleDeleteEntry={handleDeleteEntry}
        formData={formData}
      />
    </div>
  );
}

export default Sidebar;

// Sidebar.jsx
import SidebarButton from "./sidebarButton";
import personIcon from "../assets/person.svg";
import schoolIcon from "../assets/school.svg";
import Inputs from "./Inputs";
import workIcon from "../assets/work.svg";
import "../styles/App.css";

function Sidebar({ activeSection, setActiveSection }) {
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
      </div>
    </div>
  );
}

export default Sidebar;

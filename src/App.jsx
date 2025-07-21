import { useState } from "react";
import SidebarButton from "./SidebarButton";
import personIcon from "./assets/person.svg";
import schoolIcon from "./assets/school.svg";
import workIcon from "./assets/work.svg";
import "./App.css";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div id="sideBar">
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
  );
}

export default Sidebar;

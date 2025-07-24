import PersonalSection from "./personalSection";
import EducationSection from "./educationSection";
import WorkSection from "./workSection";
import NoteSection from "./notesSection";
import SkillSection from "./skillSection";
function Display({ formData }) {
  return (
    <div id="OutputContainer">
      <PersonalSection formData={formData} />
      <EducationSection formData={formData} />
      <WorkSection formData={formData} />
      <SkillSection formData={formData} />
      <NoteSection formData={formData} />
    </div>
  );
}

export default Display;

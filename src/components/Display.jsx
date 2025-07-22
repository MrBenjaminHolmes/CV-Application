import PersonalSection from "./personalSection";
import EducationSection from "./educationSection";
import WorkSection from "./workSection";
function Display({ formData }) {
  return (
    <div id="OutputContainer">
      <PersonalSection formData={formData} />
      <EducationSection formData={formData} />
      <WorkSection formData={formData} />
    </div>
  );
}

export default Display;

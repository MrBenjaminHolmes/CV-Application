function EducationSection({ formData }) {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>{formData.education.degree}</h3>
        <p>{formData.education.school}</p>
        <span className="graduation-year">
          {formData.education.yearOfGraduation}
        </span>
      </div>
    </section>
  );
}
export default EducationSection;

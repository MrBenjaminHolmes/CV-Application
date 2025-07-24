function EducationSection({ formData }) {
  return (
    <section id="education">
      <h2>Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <p>{edu.school}</p>
          <span className="graduation-year">{edu.yearOfGraduation}</span>
        </div>
      ))}
    </section>
  );
}

export default EducationSection;

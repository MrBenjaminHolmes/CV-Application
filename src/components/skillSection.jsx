function SkillSection({ formData }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {formData.skills?.length > 0 ? (
          formData.skills.map((entry, index) => (
            <li key={index}>{entry.skill}</li>
          ))
        ) : (
          <li>No skills listed.</li>
        )}
      </ul>
    </section>
  );
}

export default SkillSection;

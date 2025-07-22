function WorkSection({ formData }) {
  return (
    <section id="Work">
      <h2>Work</h2>
      <div className="work-item">
        <h3>{formData.work.position}</h3>
        <p>{formData.work.company}</p>
        <span className="graduation-year">
          {formData.work.startDate} - {formData.work.endDate}
        </span>
      </div>
    </section>
  );
}

export default WorkSection;

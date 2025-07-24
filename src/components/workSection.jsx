function WorkSection({ formData }) {
  return (
    <section id="work">
      <h2>Work</h2>
      {formData.work.map((job, index) => (
        <div key={index} className="work-item">
          <h3>{job.position}</h3>
          <p>{job.company}</p>
          <span className="employment-dates">
            {job.startDate} – {job.endDate}
          </span>
        </div>
      ))}
    </section>
  );
}

export default WorkSection;

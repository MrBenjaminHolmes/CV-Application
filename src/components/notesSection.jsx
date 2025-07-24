function NoteSection({ formData }) {
  return (
    <section id="notes">
      <h2>Notes</h2>
      <p>{formData.notes.additional}</p>
    </section>
  );
}

export default NoteSection;

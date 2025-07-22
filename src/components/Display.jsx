function Display({ formData }) {
  return (
    <div id="OutputContainer">
      <section>
        <h2>Personal Information</h2>
        <p>
          <strong>Name:</strong> {formData.profile.name}
        </p>

        <p>
          <strong>Email:</strong> {formData.profile.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.profile.phone}
        </p>
        <p>
          <strong>Location:</strong> {formData.profile.location}
        </p>
      </section>
    </div>
  );
}

export default Display;

function Display() {
  return (
    <div
      id="OutputContainer"
      className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-6"
    >
      {/* Personal Section */}
      <section>
        <h2 className="text-xl font-bold border-b pb-1 mb-2">
          Personal Information
        </h2>
        <p>
          <strong>Name:</strong> Jane Doe
        </p>
        <p>
          <strong>Email:</strong> jane.doe@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 234 567 8901
        </p>
        <p>
          <strong>Location:</strong> New York, NY
        </p>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-bold border-b pb-1 mb-2">Education</h2>
        <div>
          <p className="font-semibold">B.Sc. in Computer Science</p>
          <p>University of XYZ, 2018 – 2022</p>
          <p>GPA: 3.8/4.0</p>
        </div>
      </section>

      {/* Work Section */}
      <section>
        <h2 className="text-xl font-bold border-b pb-1 mb-2">
          Work Experience
        </h2>
        <div>
          <p className="font-semibold">Frontend Developer – ABC Corp</p>
          <p>June 2022 – Present</p>
          <ul className="list-disc list-inside">
            <li>Built and maintained responsive web interfaces using React.</li>
            <li>Collaborated with backend teams to integrate RESTful APIs.</li>
            <li>Improved performance and accessibility across major pages.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Display;

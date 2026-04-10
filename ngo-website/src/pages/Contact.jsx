import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email) {
      err.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = "Invalid email";
    }

    if (!form.phone) {
      err.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      err.phone = "Enter valid 10-digit number";
    }

    if (!form.subject) err.subject = "Please select a subject";

    if (!form.message) err.message = "Message cannot be empty";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Your message has been sent successfully 🌿");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <p className="error">{errors.name}</p>

        <input
          type="text"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <p className="error">{errors.email}</p>

        <input
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <p className="error">{errors.phone}</p>

        <select
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        >
          <option value="">Select Subject</option>
          <option>Volunteer</option>
          <option>Donation Inquiry</option>
          <option>Partnership</option>
          <option>General Question</option>
        </select>
        <p className="error">{errors.subject}</p>

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <p className="error">{errors.message}</p>

        <button type="submit">Send Message</button>
      </form>

      <p className="success">{success}</p>
    </section>
  );
}

export default Contact;
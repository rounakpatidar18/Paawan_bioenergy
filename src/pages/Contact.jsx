import { useState } from "react";
import { sendContactForm } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "Name required";
    if (!form.email.includes("@")) err.email = "Valid email required";
    if (form.message.length < 10)
      err.message = "Message must be 10 characters";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    await sendContactForm(form);
    alert("Message Sent!");
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit} noValidate>
          <input
            className="form-control mb-2"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}

          <input
            className="form-control mb-2"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}

          <textarea
            className="form-control mb-2"
            placeholder="Message"
            rows="4"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && (
            <small className="text-danger">{errors.message}</small>
          )}

          <button className="btn btn-success mt-3">Send Message</button>
        </form>
      </div>
    </section>
  );
}

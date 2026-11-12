
import { useState } from "react";
import "./Contact.css";

const CONTACT = {
  email: "nyamwayaremmy97@gmail.com",
  phone: "+254791128065",
  whatsapp: "https://wa.me/254791128065",
  formspree: "https://formspree.io/f/maeoyonr",
};

const socials = [
  {
    name: "X",
    url: "https://x.com/Pumtechs",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/yulezekwecheedozzie",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pumtechs/",
  },
  {
    name: "GitHub",
    url: "https://github.com/pumtechs-droid",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(CONTACT.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message =
          result.errors?.map((item) => item.message).join(", ") ||
          "Your message could not be sent. Please try again.";

        throw new Error(message);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message ||
          "Something went wrong. Please email me directly."
      );
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-intro">
          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            Let's create something
            <span> meaningful.</span>
          </h2>

          <p className="contact-description">
            Have a project, opportunity, collaboration or idea
            you'd like to discuss? I'd love to hear from you.
            Let's connect and explore how we can work together.
          </p>

          <div className="contact-details">

            <a
              href={`mailto:${CONTACT.email}`}
              className="contact-detail"
            >
              <span className="contact-icon">✉</span>
              <span>
                <small>Email me</small>
                <strong>{CONTACT.email}</strong>
              </span>
            </a>

            <a
              href={`tel:${CONTACT.phone}`}
              className="contact-detail"
            >
              <span className="contact-icon">☎</span>
              <span>
                <small>Call me</small>
                <strong>+254 791 128 065</strong>
              </span>
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <span className="contact-icon">◉</span>
              <span>
                <small>WhatsApp</small>
                <strong>Start a conversation</strong>
              </span>
            </a>

          </div>

          <div className="contact-social-area">
            <h3>Connect with me</h3>

            <div className="contact-socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  {social.name}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-heading">
            <span>LET'S TALK</span>
            <h3>Send me a message</h3>
            <p>
              Fill in the details below and I'll get back to you.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-field">
              <label htmlFor="contact-name">
                Your name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                Email address
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={150}
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                maxLength={150}
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                Your message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project, idea or enquiry..."
                minLength={10}
                maxLength={5000}
                required
                disabled={status === "sending"}
              />
            </div>

            <input
              type="text"
              name="_gotcha"
              className="contact-honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending your message..."
                : "Send Message"}
              {status !== "sending" && <span>→</span>}
            </button>

            {status === "success" && (
              <div
                className="contact-feedback success"
                role="status"
                aria-live="polite"
              >
                <strong>Message sent successfully!</strong>
                <p>
                  Thank you for reaching out. I'll get back
                  to you as soon as possible.
                </p>
              </div>
            )}

            {status === "error" && (
              <div
                className="contact-feedback error"
                role="alert"
              >
                <strong>Message not sent</strong>
                <p>{errorMessage}</p>
                <p>
                  You can also contact me at{" "}
                  <a href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>.
                </p>
              </div>
            )}

            <p className="contact-privacy">
              Your information will only be used to respond
              to your enquiry.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}

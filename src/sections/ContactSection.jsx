import React, { useState } from 'react';
import Reveal from '../components/Reveal.jsx';

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6H20V18H4V6Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Simple phone icon (inline SVG) without external libraries.
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.81.31 1.59.57 2.34a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 6 6l1.74-1.14a2 2 0 0 1 2.11-.45c.75.26 1.53.45 2.34.57A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitState, setSubmitState] = useState({
    status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    message: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (name.length < 2) return 'Please enter your name.';

    // Basic email validation for better UX.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address.';

    if (message.length < 10) return 'Please write a message (at least 10 characters).';

    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setSubmitState({ status: 'error', message: validationError });
      return;
    }

    setSubmitState({ status: 'loading', message: 'Sending message...' });

    // Temporary UI-only submission (no EmailJS/network call).
    window.setTimeout(() => {
      setSubmitState({
        status: 'success',
        message: 'Message sent successfully. I’ll get back to you soon!'
      });
      setForm({ name: '', email: '', message: '' });

      // Hide the message automatically after a short time.
      window.setTimeout(() => {
        setSubmitState({ status: 'idle', message: '' });
      }, 3200);
    }, 900);
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-lead">
            Have a query in mind? Send a message and I’ll get back to you.
          </p>
        </div>

        <div className="contact-grid">
          <Reveal delayMs={60}>
            <div className="contact-box">
              <div className="contact-details">
                <div className="detail-row">
                  <MailIcon />
                  <div>
                    <strong>Email</strong>
                    <span>
                      <a href="mailto:sarvjeetkaur9729@gmail.com">
                        sarvjeetkaur9729@gmail.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="detail-row">
                  <PhoneIcon />
                  <div>
                    <strong>Phone</strong>
                    <span>
                      <a href="tel:+919729863188">+91-9729863188</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="contact-box card" style={{ padding: 18 }}>
              <form className="form" onSubmit={onSubmit}>
                <div>
                  <div className="field-label">Your Name</div>
                  <input
                    className="input"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <div className="field-label">Email</div>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <div className="field-label">Message</div>
                  <textarea
                    className="textarea"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Write your message"
                    required
                  />
                </div>

                <button className="btn btn-primary" type="submit" disabled={submitState.status === 'loading'}>
                  {submitState.status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {submitState.status !== 'idle' ? (
                  <div
                    className={`form-status ${submitState.status}`}
                    role={submitState.status === 'success' ? 'status' : 'alert'}
                  >
                    {submitState.message}
                  </div>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


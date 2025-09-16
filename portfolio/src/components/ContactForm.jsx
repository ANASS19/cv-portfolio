import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactForm = ({ targetEmail }) => {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const canSend = useMemo(() => SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState(initialState);
    setTimeout(() => {
      setStatus('idle');
      setStatusMessage('');
    }, 4000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canSend) {
      setStatus('warning');
      setStatusMessage('Configure EmailJS environment variables to enable direct email sending.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Dispatching your message...');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formState.name,
          reply_to: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: targetEmail
        },
        {
          publicKey: PUBLIC_KEY
        }
      );

      setStatus('success');
      setStatusMessage('Message sent successfully. I will get back to you soon!');
      resetForm();
    } catch (error) {
      setStatus('error');
      setStatusMessage('Something went wrong while sending. Please try again or use the email button below.');
      console.error('EmailJS error', error); // surface failure for debugging
    }
  };

  return (
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field-grid">
          <label htmlFor="contact-name">
            <span>Name</span>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              value={formState.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="contact-email">
            <span>Email</span>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={formState.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <label htmlFor="contact-subject">
          <span>Subject</span>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            required
            value={formState.subject}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="contact-message">
          <span>Message</span>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={formState.message}
            onChange={handleChange}
          />
        </label>
        <div className="contact-actions">
          <button type="submit" className="primary-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          <a className="ghost-btn" href={`mailto:${targetEmail}?subject=${encodeURIComponent(formState.subject || 'Hello Anass')}`}>
            Email Directly
          </a>
        </div>
        {status !== 'idle' && (
          <p className={`status-message status-${status}`}>
            {statusMessage}
          </p>
        )}
        {!canSend && (
          <p className="status-message status-warning">
            Add your EmailJS keys to a <code>.env</code> file (see README section below) to activate serverless email delivery.
          </p>
        )}
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  targetEmail: PropTypes.string.isRequired
};

export default ContactForm;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePluginInit } from '../hooks/usePluginInit';

export default function Contact() {
  usePluginInit();

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(false);
    setTimeout(() => {
      setSuccessMessage(true);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="bg-dark text-light relative jarallax">
        <div className="de-gradient-edge-top"></div>
        <img src="images/background/breadcrumb.png" className="jarallax-img" alt="" />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="spacer-double sm-hide"></div>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Contact</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sw-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="p-40 h-100 jarallax rounded-1 overflow-hidden">
                <img src="images/background/CONTACT.png" className="jarallax-img" alt="" />
                <div className="sw-overlay"></div>
                <div className="gradient-edge-bottom h-80"></div>
                <div className="relative z-2">
                  <div className="subtitle">Get In Touch</div>
                  <h2 className="wow fadeInUp">We are always ready to help you</h2>
                  <p>Whether you have a question, a suggestion, or just want to say hello, this is the place to do it. Please fill out the form below with your details and message, and we'll get back to you as soon as possible.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-40 bg-dark-2 text-light rounded-1">
                <h3>Get In Touch</h3>
                <form onSubmit={handleSubmit} className="relative z1000">
                  <div className="field-set">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="field-set">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="field-set">
                    <input type="text" name="phone" className="form-control" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="field-set mb20">
                    <textarea name="message" className="form-control" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <div id="submit" className="mt20">
                    <input type="submit" value="Send Message" className="btn-main" disabled={submitting} />
                  </div>
                  {successMessage && (
                    <div className="success mt-3">
                      Your message has been sent successfully. Refresh this page if you want to send more messages.
                    </div>
                  )}
                  {errorMessage && (
                    <div className="error mt-3">Sorry there was an error sending your form.</div>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="spacer-double"></div>
        </div>
      </section>
    </div>
  );
}

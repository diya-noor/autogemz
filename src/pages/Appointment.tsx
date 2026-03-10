import { useState } from 'react';
import { usePluginInit } from '../hooks/usePluginInit';

export default function Appointment() {
  usePluginInit();

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formData, setFormData] = useState({
    service: '', date: '', time: '', name: '', email: '', phone: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(false);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1000);
  };

  const reOrder = () => {
    setSubmitted(false);
    setFormData({ service: '', date: '', time: '', name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="no-bottom no-top mt-5" id="content">
      <div id="top"></div>

      <section className="jarallax">
        <img src="images/background/1.webp" className="jarallax-img" alt="" />
        <div className="container relative z-2">
          <div className="spacer-single xs-hide"></div>
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="relative">
                {submitted ? (
                  <div id="success_message_col" className="success text-light p-40 h-100">
                    <h3>Thank You For Your Order</h3>
                    <p>We have received your request and will be processing it shortly. Click button below if you want to make another order.</p>
                    <button className="btn-main" onClick={reOrder}>Re-order</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z1000 bg-dark text-light rounded-1 p-40 mt-5">
                    <div className="row g-3 mt-5">
                      <div className="col-lg-12">
                        <h2 className="mb-3"><i className="fa fa-envelope-o id-color me-2"></i> Make Appointment</h2>
                        <p>Dirty car bringing down your shine? Get it detailed today! Book your appointment now and drive clean with confidence and style.</p>
                        <div className="relative">
                          <select name="service" className="form-control" value={formData.service} onChange={handleChange} required>
                            <option disabled value="">Select Service</option>
                            <option value="Car Import">Car Import</option>
                            <option value="Car Inspection">Car Inspection</option>
                            <option value="Car Documentation">Car Documentation</option>
                            <option value="Investment Opportunity">Investment Opportunity</option>
                          </select>
                          <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down"></i>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="relative">
                          <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-calendar"></i>
                          <input className="form-control" name="date" type="date" value={formData.date} onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="relative">
                          <select name="time" className="form-control" value={formData.time} onChange={handleChange} required>
                            <option disabled value="">Select Time</option>
                            {['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'].map(t => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down"></i>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <input type="text" name="name" placeholder="Name" className="form-control" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="col-lg-4">
                        <input type="email" name="email" placeholder="Email" className="form-control" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div className="col-lg-4">
                        <input type="text" name="phone" placeholder="Phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="message" className="form-control" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                      </div>
                      <div className="col-lg-12">
                        <div id="submit">
                          <input type="submit" value="Send Appointment" className="btn-main" disabled={submitting} />
                        </div>
                      </div>
                    </div>
                    {errorMessage && (
                      <div className="error mt-3">Sorry there was an error sending your form.</div>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="sw-overlay"></div>
      </section>
    </div>
  );
}

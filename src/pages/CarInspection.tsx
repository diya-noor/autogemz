import { usePluginInit } from '../hooks/usePluginInit';

export default function CarInspection() {
  usePluginInit();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="no-top no-bottom overflow-hidden">
        <div className="container-fluid position-relative half-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 position-lg-absolute right-half h-100">
                <div className="image" data-bgimage="url(images/misc/inspection.png) center"></div>
              </div>
              <div className="col-lg-6">
                <div className="pt-lg-5 mt-lg-5 me-lg-3">
                  <div className="py-5 mt-5 mb-3 me-lg-3">
                    <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Cruise towards excellence.</div>
                    <h1 className="wow fadeInUp" data-wow-delay=".2s">Expert Car Inspection</h1>
                    <p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">Our commitment to quality begins with our Expert Car Inspection service. Every premium imported vehicle we handle is subjected to a rigorous and thorough examination. This meticulous inspection process is performed to guarantee that the vehicle is in absolute flawless condition and is ready to deliver unmatched performance. We offer a wide range of premium imported cars, and each selection is made carefully, focusing on supreme quality, exceptional performance, and sophisticated style.</p>
                    <a className="btn-main mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" href="tel:+923341111167" target="_blank" rel="noreferrer"><span>Call Now</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h3>What's Included</h3>
              <ul className="ul-check">
                <li>A thorough, multi-point inspection performed by certified specialists.</li>
                <li>Verification and testing to guarantee unmatched road performance.</li>
                <li>Assessment of the vehicle's history, quality, and style to ensure a premium selection.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Benefits</h3>
              <ul className="ul-check">
                <li>Drive away with complete assurance of your vehicle's condition.</li>
                <li>Flawless condition ensures reliable and long-term performance.</li>
                <li>Eliminate uncertainties with an expert-verified quality guarantee.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-2 jarallax">
        <img src="images/background/inspection.png" className="jarallax-img" alt="" />
        <div className="sw-overlay"></div>
        <div className="container relative z-2">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="subtitle">Steps</div>
              <h2>How It Works</h2>
            </div>
            {[
              { icon: 'fa-search', title: 'Vehicle Vetting & Selection', text: 'Our team pre-selects premium imported cars, focusing on models known for quality, performance, and style.', arrow: true },
              { icon: 'fa-paint-brush', title: 'Meticulous Examination', text: 'The selected vehicle undergoes a thorough, multi-point inspection by certified specialists to identify any imperfections.', arrow: true },
              { icon: 'fa-spray-can', title: 'Condition Verification', text: 'Detailed checks are conducted to ensure the vehicle meets our "flawless condition" standard.', arrow: true },
              { icon: 'fa-check-circle', title: 'Performance Testing', text: 'Comprehensive road and diagnostic tests are performed to guarantee unmatched on-road performance and reliability.', arrow: false },
            ].map((step, i) => (
              <div key={i} className={`col-6 col-md-3 de-step${step.arrow ? ' de-step-arrow' : ''}`}>
                <div className="de-step-icon bg-color"><i className={`fas ${step.icon} fa-2x`}></i></div>
                <h4 className="fw-bold">{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-color text-light pt-60 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Want your car to get inspected?</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <a className="btn-main fx-slide btn-line" href="tel:+923341111167"><span>Make Appointment</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

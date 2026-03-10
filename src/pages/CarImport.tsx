import { Link } from 'react-router-dom';
import { usePluginInit } from '../hooks/usePluginInit';

export default function CarImport() {
  usePluginInit();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="no-top no-bottom overflow-hidden">
        <div className="container-fluid position-relative half-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 position-lg-absolute right-half h-100">
                <div className="image" data-bgimage="url(images/misc/importation.png) center"></div>
              </div>
              <div className="col-lg-6">
                <div className="pt-lg-5 mt-lg-5 me-lg-3">
                  <div className="py-5 mt-5 mb-3 me-lg-3">
                    <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Cruise towards excellence.</div>
                    <h1 className="wow fadeInUp" data-wow-delay=".2s">Seamless Car Importation</h1>
                    <p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">Acquiring your dream luxury car from anywhere in the world has never been easier, thanks to our Seamless Car Importation service. We eliminate the complexities and handle all the associated hassle, providing a comprehensive, end-to-end import solution. Our expertise covers the entire journey, beginning with the initial sourcing of your desired luxury vehicle and culminating in its doorstep delivery. We bring you the finest selection of luxury cars, and our dedicated team expertly manages every logistical component.</p>
                    <Link className="btn-main mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" to="/contact"><span>Book Detailing</span></Link>
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
                <li>Managing the entire process of sourcing your dream luxury car.</li>
                <li>Final, secure delivery of your vehicle directly to your location.</li>
                <li>End-to-end management of all critical steps: Import, Shipping, Cargo, Delivery, and Management.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Benefits</h3>
              <ul className="ul-check">
                <li>Access to a global inventory of the world's finest luxury vehicles.</li>
                <li>A completely stress-free and hassle-free import experience.</li>
                <li>Ensures a smooth and exclusive process with perfection and trust.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-2 jarallax text-light">
        <img src="images/background/importation.png" className="jarallax-img" alt="" />
        <div className="sw-overlay"></div>
        <div className="container relative z-2">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="subtitle">Steps</div>
              <h2>How It Works</h2>
            </div>
            {[
              { icon: 'fa-search', title: 'Vehicle Sourcing', text: 'We identify and source your dream luxury car from trusted international markets and premium dealers worldwide.', arrow: true },
              { icon: 'fa-ship', title: 'Shipping & Logistics', text: 'Our team handles all shipping arrangements, cargo management, and international logistics to ensure safe transit.', arrow: true },
              { icon: 'fa-file-alt', title: 'Import & Clearance', text: 'We manage all import documentation, customs clearance, and compliance requirements on your behalf.', arrow: true },
              { icon: 'fa-home', title: 'Doorstep Delivery', text: 'Your luxury vehicle is delivered directly to your doorstep, fully inspected and ready to drive.', arrow: false },
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
              <h3 className="mb-0 fs-32">Ready to import your dream car?</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <a className="btn-main fx-slide btn-line" href="tel:+923341111167"><span>Call Now</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

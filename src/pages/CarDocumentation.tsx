import { usePluginInit } from '../hooks/usePluginInit';

export default function CarDocumentation() {
  usePluginInit();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="no-top no-bottom overflow-hidden">
        <div className="container-fluid position-relative half-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 position-lg-absolute right-half h-100">
                <div className="image" data-bgimage="url(images/misc/documentation.png) center"></div>
              </div>
              <div className="col-lg-6">
                <div className="pt-lg-5 mt-lg-5 me-lg-3">
                  <div className="py-5 mt-5 mb-3 me-lg-3">
                    <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Cruise towards excellence.</div>
                    <h1 className="wow fadeInUp" data-wow-delay=".2s">Guaranteed Car Documentation</h1>
                    <p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">Trust and transparency are the cornerstones of the AutoGemz experience, and our Guaranteed Car Documentation service is designed to uphold these values. We provide a steadfast guaranty of fully verified and transparent documentation for every single car you choose to purchase. This critical service ensures that your transaction is secure and straightforward, actively working to eliminate any complexities or potential risks associated with vehicle records.</p>
                    <a className="btn-main mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" href="tel:+923341111167"><span>Call Now</span></a>
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
                <li>Guaranteed verification of all official vehicle records and paperwork.</li>
                <li>Provision of industry-leading documentation services as part of our core mission.</li>
                <li>Ensuring all documentation is completely transparent, providing full visibility to the client.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Benefits</h3>
              <ul className="ul-check">
                <li>Experience unparalleled trust and transparency in the buying process.</li>
                <li>Verified documents ensure the legitimacy and security of your investment.</li>
                <li>Contributes to a smooth, efficient, and exclusive ownership experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-2 jarallax text-light">
        <img src="images/background/documentation.png" className="jarallax-img" alt="" />
        <div className="sw-overlay"></div>
        <div className="container relative z-2">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="subtitle">Steps</div>
              <h2>How It Works</h2>
            </div>
            {[
              { icon: 'fa-clipboard-list', title: 'Document Collection', text: 'We gather all official vehicle records, ownership history, and import papers from relevant authorities.', arrow: true },
              { icon: 'fa-search', title: 'Thorough Verification', text: 'Our specialists rigorously verify every document for authenticity, accuracy, and legal compliance.', arrow: true },
              { icon: 'fa-shield-alt', title: 'Guaranty Issuance', text: 'Once verified, we issue our official documentation guaranty, giving you complete confidence in the paperwork.', arrow: true },
              { icon: 'fa-handshake', title: 'Transparent Handover', text: 'All verified documents are handed over to you in full transparency, ensuring a smooth and secure transaction.', arrow: false },
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
              <h3 className="mb-0 fs-32">Need guaranteed documentation for your vehicle?</h3>
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

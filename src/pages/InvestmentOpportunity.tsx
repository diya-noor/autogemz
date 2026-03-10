import { usePluginInit } from '../hooks/usePluginInit';

export default function InvestmentOpportunity() {
  usePluginInit();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="no-top no-bottom overflow-hidden">
        <div className="container-fluid position-relative half-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 position-lg-absolute right-half h-100">
                <div className="image" data-bgimage="url(images/misc/investment.png) center"></div>
              </div>
              <div className="col-lg-6">
                <div className="pt-lg-5 mt-lg-5 me-lg-3">
                  <div className="py-5 mt-5 mb-3 me-lg-3">
                    <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Cruise towards excellence.</div>
                    <h1 className="wow fadeInUp" data-wow-delay=".2s">Exclusive Investment Opportunities</h1>
                    <p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">AutoGemz offers a unique proposition to those seeking to blend automotive passion with financial acumen through our Exclusive Investment Opportunities. We invite clients to partner with AutoGemz to invest smartly in luxury cars. This service allows you to find not just a vehicle, but a valuable investment, recognizing our role as a trusted partner and a global leader in the premium car market. Our investors are set up to enjoy premium returns, with the portfolio highlighting a significant opportunity for a potential Monthly Return of 24%.</p>
                    <a className="btn-main mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" href="tel:03341111167"><span>Call Now</span></a>
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
                <li>Access to exclusive opportunities to partner and invest in the luxury car sector.</li>
                <li>Focused investment in high-value, sought-after luxury vehicles.</li>
                <li>Highlighting the opportunity for premium returns, including the 24% monthly return potential.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Benefits</h3>
              <ul className="ul-check">
                <li>Transform your interest in luxury vehicles into a substantial financial asset.</li>
                <li>Secure a trusted partner in AutoGemz, recognized for reliability and excellence.</li>
                <li>Benefit from a unique pathway to financial growth within the premium automotive market.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-2 jarallax text-light">
        <img src="images/background/investment.png" className="jarallax-img" alt="" />
        <div className="sw-overlay"></div>
        <div className="container relative z-2">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="subtitle">Steps</div>
              <h2>How It Works</h2>
            </div>
            {[
              { icon: 'fa-phone', title: 'Initial Consultation', text: 'Contact our investment team to discuss your financial goals and explore the premium vehicle investment options available.', arrow: true },
              { icon: 'fa-car', title: 'Vehicle Selection', text: 'We identify high-value luxury vehicles with strong appreciation potential that align with your investment strategy.', arrow: true },
              { icon: 'fa-file-signature', title: 'Agreement & Investment', text: 'A transparent investment agreement is signed and your funds are allocated to the selected luxury vehicle portfolio.', arrow: true },
              { icon: 'fa-chart-line', title: 'Returns & Profits', text: 'Sit back and enjoy premium monthly returns of up to 24% as your investment grows with AutoGemz\'s expert management.', arrow: false },
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
              <h3 className="mb-0 fs-32">Ready to invest with AutoGemz?</h3>
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

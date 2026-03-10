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

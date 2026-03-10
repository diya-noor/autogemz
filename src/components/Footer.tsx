import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* footer begin */}
      <footer>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-sm-6">
              <img src="images/auto-gems-logo.png" style={{ margin: '-65px 15px' }} className="logo-footer" alt="" />
              <div className="spacer-20"></div>
              <p>At <strong>AutoGemz</strong>, we redefine luxury on wheels. From premium sedans to high-end SUVs, we bring you the finest selection of luxury cars with trust, transparency, and top-tier service. Whether you're buying, selling, or importing.</p>
              <div className="social-icons mb-sm-30">
                <a href="https://www.facebook.com/share/1AEzvHMQFG/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/autogemz.pk?igsh=MTBiZjd6OTBheHA3bQ==" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
              <div className="row">
                <div className="col-lg-5">
                  <div className="widget">
                    <h5>Company</h5>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="widget">
                    <h5>Our Services</h5>
                    <ul>
                      <li><Link to="/car-inspection">Car Inspection</Link></li>
                      <li><Link to="/car-import">Car Import</Link></li>
                      <li><Link to="/car-documentation">Car Documentation</Link></li>
                      <li><Link to="/investment-opportunity">Investment Opportunity</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
              <div className="widget">
                <h5>Contact Us</h5>
                <div className="fw-bold text-white">
                  <i className="icofont-location-pin me-2 id-color"></i>Head Office
                </div>
                Building No, 140 Main Blvd, Phase 4 Civic Center Bahria Town, Islamabad
                <div className="spacer-20"></div>
                <div className="fw-bold text-white">
                  <i className="icofont-phone me-2 id-color"></i>Call Us
                </div>
                <a href="tel:+923341111167"> +92 334 1111 167</a>
                <div className="spacer-20"></div>
                <div className="fw-bold text-white">
                  <i className="icofont-envelope me-2 id-color"></i>Email Us
                </div>
                <a href="mailto:info@autogemz.com">info@autogemz.com</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
}

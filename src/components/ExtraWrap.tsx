import { Link } from 'react-router-dom';

export default function ExtraWrap() {
  return (
    <>
      {/* overlay content begin */}
      <div id="extra-wrap" className="text-light">
        <div id="btn-close">
          <span></span>
          <span></span>
        </div>
        <div id="extra-content">
          <img src="images/auto-gems-logo.png" className="w-150px" alt="" />
          <div className="spacer-30-line"></div>
          <h5>Our Services</h5>
          <ul className="ul-check">
            <li><Link to="/car-inspection">Car Inspection</Link></li>
            <li><Link to="/car-import">Car Import</Link></li>
            <li><Link to="/car-documentation">Car Documentation</Link></li>
            <li><Link to="/investment-opportunity">Investment Opportunity</Link></li>
          </ul>
          <div className="spacer-30-line"></div>
          <h5>Contact Us</h5>
          <div><i className="icofont-clock-time me-2 op-5"></i>Monday - Saturday 10:00 - 10:00</div>
          <div><i className="icofont-location-pin me-2 op-5"></i> Building No, 140 Main Blvd, Phase 4 Civic Center Bahria Town, Islamabad</div>
          <div><i className="icofont-envelope me-2 op-5"></i>info@autogemz.com</div>
          <div className="spacer-30-line"></div>
          <h5>About Us</h5>
          <p>At AutoGemz, we redefine luxury on wheels. From premium sedans to high-end SUVs, we bring you the finest selection of luxury cars with trust, transparency, and top-tier service. Whether you're buying, selling, or importing.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1AEzvHMQFG/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/autogemz.pk?igsh=MTBiZjd6OTBheHA3bQ==" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      {/* overlay content end */}
    </>
  );
}

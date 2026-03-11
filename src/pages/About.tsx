import { Link } from 'react-router-dom';
import { usePluginInit } from '../hooks/usePluginInit';

export default function About() {
  usePluginInit();

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
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">About Us</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sw-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="relative">
                <img src="images/misc/aviavn.png" className="relative z-2 mb-5 rounded-1 mb-4 w-60 soft-shadow" alt="" />
                <img src="images/misc/aviav.png" className="abs end-0 mt-5 rounded-1 mb-4 w-60" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">About Us</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Know more about AutoGemz</h2>
              <p>At AutoGemz, we redefine luxury on wheels. From premium sedans to high-end SUVs, we bring you the finest selection of luxury cars with trust, transparency, and top-tier service. Whether you're buying, selling, or importing, AutoGemz ensures a smooth and exclusive experience—because your next drive deserves nothing less than perfection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-2">
        <div className="container">
          <div className="row g-4">
            {[
              { img: '1.webp', name: 'Thomas Bennett', role: 'Lead Detail Specialist' },
              { img: '2.webp', name: 'Hailey Cooper', role: 'Customer Care Manager' },
              { img: '3.webp', name: 'Joshua Henry', role: 'Paint Correction Expert' },
              { img: '4.webp', name: 'Jackson Reed', role: 'Ceramic Coating Technician' },
            ].map((m, i) => (
              <div key={i} className="col-lg-3">
                <div className="bg-dark relative rounded-1 overflow-hidden">
                  <img src={`images/team/${m.img}`} className="w-100" alt="" />
                  <div className="p-3 text-center">
                    <h4 className="mb-0">{m.name}</h4>
                    <p className="mb-2">{m.role}</p>
                    <div className="social-icons">
                      <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></a>
                      <a href="#"><i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="container">
          <div className="row g-4 gx-5">
            <div className="col-lg-6">
              <h4 className="mb-4 wow fadeInRight">Our Vision</h4>
              <p className="fs-24 fw-600 lh-1-4 wow fadeInUp">
                Our vision is to become a global leader in the premium car market, recognized for reliability, innovation, and excellence. We strive to build a seamless car-buying experience where every client finds not just a vehicle—but a valuable investment and a trusted partner in AutoGemz.
              </p>
            </div>
            <div className="col-lg-6">
              <h4 className="mb-4 wow fadeInRight">Our Mission</h4>
              <p className="fs-24 fw-600 lh-1-4 wow fadeInUp">
                At AutoGemz, our mission is to redefine trust and transparency in the automotive industry by providing top-notch car inspection, documentation, and import services. We aim to make luxury and quality accessible to everyone—ensuring every customer drives with confidence, satisfaction, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

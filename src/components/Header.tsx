import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

declare const $: any;

export default function Header() {
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    if (typeof $ !== 'undefined') {
      const $header = $('header');
      if ($header.hasClass('menu-open')) {
        $('#menu-btn').trigger('click');
      }
    }
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* header begin */}
      <header className="transparent">
        <div id="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between xs-hide">
                  <div className="d-flex">
                    <div className="topbar-widget">
                      <a href="https://maps.app.goo.gl/CWuAeq29tEPBoNZn6" target="_blank" rel="noreferrer">
                        <img src="images/svg-white/bell.svg" className="" alt="" />
                        Civic Center Behria Town Phase 4, Rawalpindi
                      </a>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="topbar-widget me-5">
                      <a href="tel:+923341111167">
                        <img src="images/svg-white/phone.svg" className="" alt="" />Call us +92 334 1111 167
                      </a>
                    </div>
                    <div className="topbar-widget">
                      <a href="mailto:info@autogemz.com">
                        <img src="images/svg-white/envelope.svg" className="" alt="" />Message us: info@autogemz.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div id="logo">
                    <Link to="/">
                      <img className="logo-main" src="images/auto-gems-logo.png" alt="" style={{ height: '150px' }} />
                      <img className="logo-mobile" src="images/mobile.png" alt="" style={{ height: '50px' }} />
                    </Link>
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <Link className={`menu-item${isActive('/') ? ' active' : ''}`} to="/">Home</Link>
                    </li>
                    <li>
                      <a className="menu-item">Services</a>
                      <ul>
                        <li><Link to="/car-import">Car Import</Link></li>
                        <li><Link to="/car-inspection">Car Inspection</Link></li>
                        <li><Link to="/car-documentation">Car Documentation</Link></li>
                        <li><Link to="/investment-opportunity">Investment Opportunity</Link></li>
                      </ul>
                    </li>
                    <li>
                      <Link className={`menu-item${isActive('/inventory') ? ' active' : ''}`} to="/inventory">Inventory</Link>
                    </li>
                    <li>
                      <Link className={`menu-item${isActive('/about') ? ' active' : ''}`} to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link className={`menu-item${isActive('/contact') ? ' active' : ''}`} to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="de-flex-col">
                  <div className="menu_side_area">
                    <Link to="/appointment" className="btn-main fx-slide hover-white"><span>Make Appointment</span></Link>
                    <span id="menu-btn"></span>
                  </div>
                  <div id="btn-extra">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
    </>
  );
}

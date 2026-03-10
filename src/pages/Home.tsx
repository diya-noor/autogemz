import { Link } from 'react-router-dom';
import { usePluginInit } from '../hooks/usePluginInit';

export default function Home() {
  usePluginInit();

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="jarallax">
        <img src="images/background/4.webp" className="jarallax-img" alt="" />
        <div className="sw-overlay"></div>
        <div className="gradient-edge-bottom"></div>
        <div className="container relative z-3">
          <div className="spacer-double"></div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="fs-72 fs-xs-10vw text-uppercase wow fadeInUp">Go Beyond Ordinary at AutoGemz</h1>
              <p className="mb-0 col-lg-6 offset-lg-3 wow fadeInUp" data-wow-delay=".2s">Cruise towards excellence.</p>
              <div className="spacer-single"></div>
              <a className="btn-main fx-slide" href="tel:+923341111167" target="_blank" rel="noreferrer"><span>Call Now</span></a>
            </div>
            <div className="spacer-single"></div>
            <div className="col-lg-12">
              <img src="images/misc/c2.webp" className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-2">
        <div className="container">
          <div className="row g-4 justify-content-center mb-2">
            <div className="col-lg-6">
              <div className="text-center">
                <div className="subtitle">Welcome to AutoGemz</div>
                <h2>Our Services</h2>
                <p>We look forward, innovate relentlessly, and promise to elevate your expectations with every visit.</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".0s">
                <img src="images/services/inspection.png" className="hover-scale-1-1 w-100" alt="" />
                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                  <div className="mb-3">Each vehicle is thoroughly inspected to ensure flawless condition and unmatched performance.</div>
                  <Link className="btn-main fx-slide" to="/car-inspection"><span>View Details</span></Link>
                </div>
                <h3 className="abs fs-32 lh-1 p-4 top-0 start-0">01</h3>
                <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1"></div>
                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                  <h4 className="mb-3">Car Inspection</h4>
                </div>
                <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0"></div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".2s">
                <img src="images/services/documentation.png" className="hover-scale-1-1 w-100" alt="" />
                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                  <div className="mb-3">We guarantee fully verified and transparent documentation for every car you buy.</div>
                  <Link className="btn-main fx-slide" to="/car-documentation"><span>View Details</span></Link>
                </div>
                <h3 className="abs fs-32 lh-1 p-4 top-0 start-0">02</h3>
                <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1"></div>
                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                  <h4 className="mb-3">Car Documentation Guaranty</h4>
                </div>
                <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0"></div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".4s">
                <img src="images/services/import.png" className="hover-scale-1-1 w-100" alt="" />
                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                  <div className="mb-3">Import your dream luxury car effortlessly; we handle everything from sourcing to doorstep delivery.</div>
                  <Link className="btn-main fx-slide" to="/car-import"><span>View Details</span></Link>
                </div>
                <h3 className="abs fs-32 lh-1 p-4 top-0 start-0">03</h3>
                <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1"></div>
                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                  <h4 className="mb-3">Car Import</h4>
                </div>
                <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0"></div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".6s">
                <img src="images/services/invest.png" className="hover-scale-1-1 w-100" alt="" />
                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                  <div className="mb-3">Partner with AutoGemz to invest smartly in luxury cars and enjoy premium returns.</div>
                  <Link className="btn-main fx-slide" to="/investment-opportunity"><span>View Details</span></Link>
                </div>
                <h3 className="abs fs-32 lh-1 p-4 top-0 start-0">04</h3>
                <div className="abs bg-blur z-2 top-0 w-100 h-100 hover-op-1"></div>
                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                  <h4 className="mb-3">Investment Opportunity</h4>
                </div>
                <div className="gradient-edge-bottom color abs w-100 h-40 bottom-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0" aria-label="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12 wow fadeInUp">
              <div className="owl-6 no-alpha owl-carousel owl-theme">
                {[1,2,3,4,5,6,7,8,9].map(n => (
                  <img key={n} src={`images/logo-brands/${n}.png`} className="w-100 px-lg-5 p-4" alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-2">
        <div className="container relative z-1">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="rounded-1 overflow-hidden wow zoomIn">
                        <img src="images/misc/auto.png" className="w-100 wow scaleIn" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row g-4">
                    <div className="spacer-single sm-hide"></div>
                    <div className="col-lg-12">
                      <div className="rounded-1 overflow-hidden wow zoomIn" data-wow-delay=".3s">
                        <img src="images/misc/autogemz.png" className="w-100 wow scaleIn" alt="" data-wow-delay=".3s" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subtitle wow fadeInUp" data-wow-delay=".2s">About Us</div>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">About AutoGemz</h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">At <strong>AutoGemz</strong>, we redefine luxury on wheels. From premium sedans to high-end SUVs, we bring you the finest selection of luxury cars with trust, transparency, and top-tier service. Whether you're buying, selling, or importing.</p>
              <p className="wow fadeInUp" data-wow-delay=".6s"><strong>AutoGemz</strong> ensures a smooth and exclusive experience—because your next drive deserves nothing less than perfection.</p>
              <a className="btn-main fx-slide wow fadeInUp" href="tel:03341111167" data-wow-delay=".6s"><span>Call Now</span></a>
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row g-4">
            {[
              { icon: 'icofont-briefcase-2', to: 230, label: 'Car Imports' },
              { icon: 'icofont-thumbs-up', to: 1500, label: 'Happy Customers' },
              { icon: 'icofont-users-alt-3', to: 20, label: 'Experienced Workers' },
              { icon: 'icofont-badge', to: 20, label: 'Years of Experience' },
            ].map((item, i) => (
              <div key={i} className="col-md-3 col-6">
                <div className="de_count text-center wow fadeInRight" data-wow-delay={`${i * 0.2}s`}>
                  <i className={`id-color fs-40 d-inline-block mb-3 ${item.icon}`}></i>
                  <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to={item.to} data-speed="3000">0</span>+</h3>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <div className="subtitle">Testimonials</div>
              <h2>What They Says</h2>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="owl-carousel owl-theme owl-2-dots wow fadeInUp">
                  {[
                    { name: 'Bilal Khan', city: 'Lahore', text: '"Getting my Porsche Taycan 4S through AutoGemz was ridiculously easy. Seriously, they handled everything—shipping, customs, delivery right to my house. Zero stress, zero hidden costs. I just got my dream car, hassle-free. Their import service is top-notch."' },
                    { name: 'Amir Haider', city: 'Karachi', text: '"I was a bit skeptical about investing here at first, but the returns AutoGemz promised are definitely real. That potential of getting up to 24% monthly is crazy good. They\'ve become my go-to, reliable partner for smart investment moves."' },
                    { name: 'Danish Zain', city: 'Islamabad', text: '"The documents for my imported Mercedes S400H LWB were my biggest worry, but the Guaranteed Documentation service here is fantastic. Every single record was checked and totally transparent. These guys seriously redefine trust."' },
                    { name: 'Jawad Sultan', city: 'Rawalpindi', text: '"Their inspection process is crazy detailed. I bought a Range Rover Autobiography, and the team made sure it was in perfect shape before I signed anything. Absolutely zero hidden issues—just the performance they promised."' },
                    { name: 'Fahad Rizwan', city: 'Karachi', text: '"Importing a Bentley Flying Spur for the first time made me really nervous about the paperwork and shipping. AutoGemz took care of the A to Z, and the whole experience was smooth and totally luxurious."' },
                    { name: 'Jawad Umar', city: 'Faisalabad', text: '"I really respect the honesty and transparency in the paperwork for my Mercedes C-200 AMG. AutoGemz showed me everything about the car\'s history, which instantly built trust—something other dealers didn\'t offer."' },
                    { name: 'Hasaan Awan', city: 'Multan', text: '"Partnering with AutoGemz was one of the smartest financial moves I\'ve made. The investment is straightforward, and the returns are consistently premium. Real investment experts here."' },
                    { name: 'Adeel Ahmed', city: 'Peshawar', text: '"The inspection on my Porsche Cayenne S was incredible—super detailed. They even spotted tiny things and fixed them before handing over the keys. They really deliver on excellence."' },
                    { name: 'Zain Khan', city: 'Sialkot', text: '"I imported my Ford F-150 Lariat, and the delivery speed after it landed was awesome. Customs and clearance were sorted instantly—the truck was at my door exactly on time."' },
                    { name: 'Shehzad Khan', city: 'Gujranwala', text: '"Honestly, from inspecting my Mercedes C-180 to getting the verified paperwork, the whole AutoGemz process gives you complete peace of mind. They are definitely a reliable and trustworthy partner."' },
                  ].map((t, i) => (
                    <div key={i} className="item">
                      <div className="bg-dark-2 rounded-1 p-30">
                        <div className="d-flex justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="mt-2">
                              <div className="text-white fw-bold lh-1">{t.name}</div>
                              <small>{t.city}</small>
                            </div>
                          </div>
                          <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                        </div>
                        <div className="de-rating-ext mb-2">
                          <span className="d-stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                          <span className="ms-2 text-white">5.0</span>
                        </div>
                        <p>{t.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color text-light pt-60 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Import | Invest | Buy | Sell at AutoGemz.</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <Link className="btn-main fx-slide btn-line" to="/appointment"><span>Make Appointment</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-light">
        <div className="container relative z-1">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="subtitle id-color">Trusted &amp; Reliable</div>
              <h2>Why Choose AutoGemz?</h2>
              <p>At AutoGemz, we are more than just an automotive dealership; we are innovators setting the future benchmark for vehicle care and protection. We recognized the need for a luxury automotive experience built on genuine trust and unwavering transparency. From premium sedans to high-end SUVs, we hand-select and import the finest selection of luxury cars for our discerning clientele. Whether you're buying, selling, or importing, AutoGemz ensures a smooth and exclusive journey, because your next drive deserves nothing less than perfection.</p>
            </div>
          </div>
          <div className="row g-4">
            {[
              { title: 'Expert Car Inspection', text: 'Our expert car inspection service guarantees the flawless condition and unmatched performance of your chosen luxury vehicle. This rigorous process is fundamental to our mission to redefine trust.' },
              { title: 'Guaranteed Car Documentation', text: 'We provide a steadfast guaranty of fully verified and transparent documentation for every single car you purchase, ensuring a secure and straightforward transaction.' },
              { title: 'Seamless Car Importation', text: 'Competitive rates with no hidden fees — quality service that fits your budget.' },
              { title: 'Exclusive Investment Opportunities', text: 'AutoGemz offers a unique proposition to those seeking to blend automotive passion with financial acumen. We invite clients to partner with AutoGemz to invest smartly in luxury cars and enjoy premium returns.' },
            ].map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="bg-dark-2 p-40 h-100 rounded-1">
                  <div className="relative wow fadeInUp">
                    <h4>{item.title}</h4>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative jarallax mh-500" aria-label="section">
        <div className="gradient-edge-top"></div>
        <div className="gradient-edge-bottom"></div>
        <img src="images/background/3.webp" className="jarallax-img" alt="" />
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Everything You Need to Know</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
            </div>
            <div className="col-lg-7">
              <div className="accordion s2 wow fadeInUp">
                <div className="accordion-section">
                  {[
                    { tab: 'accordion-a1', q: 'How does AutoGemz guarantee the quality of its imported luxury cars?', a: 'Every vehicle we offer undergoes a rigorous, expert-level Car Inspection. This meticulous, multi-point process is carried out by certified specialists to ensure the car is in flawless condition and delivers unmatched performance.' },
                    { tab: 'accordion-a2', q: "What sets AutoGemz's Car Documentation service apart?", a: 'Our mission is to redefine trust and transparency. We provide a Guaranty of fully verified and transparent documentation for every car you purchase, giving you complete confidence and peace of mind.' },
                    { tab: 'accordion-a3', q: 'What exactly is included in the Seamless Car Importation service?', a: 'Our import service is a comprehensive, end-to-end solution. It includes every step from globally sourcing your dream car to final doorstep delivery. We manage all logistics including Import, Shipping, Cargo, Delivery, and Management.' },
                    { tab: 'accordion-a4', q: 'What makes the Exclusive Investment Opportunities attractive?', a: 'AutoGemz offers the chance to invest smartly in luxury cars and achieve premium returns, with the potential for returns such as the highlighted 24% monthly return.' },
                    { tab: 'accordion-a5', q: 'Which luxury car brands does AutoGemz deal with?', a: 'We bring you a diverse selection of the world\'s finest vehicles including Mercedes-Benz, Porsche, Bentley, Range Rover, Tesla, and various Ford F-150 models.' },
                  ].map(item => (
                    <div key={item.tab}>
                      <div className="accordion-section-title" data-tab={`#${item.tab}`}>{item.q}</div>
                      <div className="accordion-section-content" id={item.tab}>{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

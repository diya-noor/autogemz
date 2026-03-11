import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePluginInit } from '../hooks/usePluginInit';
import './inventory.css';

export interface Car {
  id: string;
  name: string;
  brand: string;
  modelYear: number;
  status: 'new' | 'sold';
  mainImage: string;
  hoverImage: string;
  images: string[];
  specs: string[];
  features: string[];
}

const cars: Car[] = [
  { id: 'nissanpetrol', name: 'Nissan Patrol TI.L', brand: 'Nissan', modelYear: 2013, status: 'new', mainImage: 'images/cars/nissanpetrol/1.jpeg', hoverImage: 'images/cars/nissanpetrol/2.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg'].map(f => 'images/cars/nissanpetrol/' + f), specs: ['Brand: Nissan Patrol TI.L','Model: 2013','Import: 2017','Registration: Islamabad','Mileage: 80,000 KM','Color: Deep Maroon'], features: ['5.7L V8 Patrol Engine','RED Room','Full-time 4x4 System','Low-range Gearbox','Hill Descent Control','Different Terrain Modes','All Leather Seats','Front Memory Seats','Heated & Ventilated Seats','Tri-zone Climate Control','Cool Box','Rear Entertainment Screens','Parking Sensors & Camera','Sunroof','Rear AC Vents','Height Control','7-Seater','Roof Rails','360 Camera'] },
  { id: 'rangroversport', name: 'Range Rover Sport', brand: 'Land Rover', modelYear: 2016, status: 'new', mainImage: 'images/cars/rangroversport/1.jpeg', hoverImage: 'images/cars/rangroversport/2.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg'].map(f => 'images/cars/rangroversport/' + f), specs: ['Brand: Range Rover Sport','Model: 2016','Import: 2020','Registration: Islamabad','Mileage: 76,159 KM','Color: Metallic Grey'], features: ['5.0L Supercharged Engine','All Leather Electric Seats','Memory Seats','Heated & Ventilated Seats','All Black Room','Panoramic Roof','Meridian Premium Sound System','Touchscreen Infotainment System','Parking Sensors & Cameras','Air Suspension','Different Driving Modes','Electronic Stability Control','Hill Descent Control','Alcantara Roof','Rear Entertainment Screen','21 Inch Alloy Wheels'] },
  { id: 'mercedesbenzc63amgsilver', name: 'Mercedes Benz C63 AMG P30', brand: 'Mercedes', modelYear: 2009, status: 'new', mainImage: 'images/cars/mercedesbenzc63amgsilver/1.jpeg', hoverImage: 'images/cars/mercedesbenzc63amgsilver/2.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg'].map(f => 'images/cars/mercedesbenzc63amgsilver/' + f), specs: ['Brand: Mercedes Benz C63 AMG','Model: 2009','Doner: 2007','Registration: Islamabad','Mileage: 53,292 KM','Color: Silver','Variant: P30'], features: ['6.3 (NA) Engine','Front CF Lip','Borla Valvetronic Exhaust','CF Diffuser & Spoiler','AMG Front & Rear bumpers','AMG Alloy wheels','Multi-Stage ESP stability and traction','ABS (Anti-lock brakes)','Cruise control','Sunroof','AMG Performance'] },
  { id: 'mercedesbenzc63amg', name: 'Mercedes Benz C63 AMG', brand: 'Mercedes', modelYear: 2008, status: 'new', mainImage: 'images/cars/mercedesbenzc63amg/1.jpeg', hoverImage: 'images/cars/mercedesbenzc63amg/3.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg'].map(f => 'images/cars/mercedesbenzc63amg/' + f), specs: ['Brand: Mercedes Benz C63 AMG','Model: 2008','Doner: 2008','Registration: Islamabad','Mileage: 121,781 KM','Color: Silver','Variant: P30'], features: ['6.3 NA Engine','Carbon package','Custom Tuned','Telescopic steering wheel','All Leather Electric Seats','(X) Pipe','Pops and bangs','AMG Front and Rear Kits','AMG Alloy wheels','Hard Top','Cruise control','AMG performance','Up-Lifted to new shape (old parts available)'] },
  { id: 'jeepgladiator', name: 'Jeep Gladiator', brand: 'Jeep', modelYear: 2020, status: 'new', mainImage: 'images/cars/jeepgladiator/1.jpeg', hoverImage: 'images/cars/jeepgladiator/3.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg'].map(f => 'images/cars/jeepgladiator/' + f), specs: ['Brand: Jeep Gladiator','Model: 2020','Import: 2024','Registration: Islamabad','Mileage: 39,516 KM','Color: White'], features: ['Blind-Spot monitoring','Rear cross-path detection','ParkView rear camera','Adaptive cruise-control','Electronic stability control & roll mitigation','RED dashboard','Apple car play','Multiple USB ports','Removable Roof panels','Multiple Air-Bags','Large Back-Bed','LED Headlamps','Fog-Lamps'] },
  { id: 'toyotachr', name: 'Toyota CHR', brand: 'Toyota', modelYear: 2018, status: 'new', mainImage: 'images/cars/toyotachr/1.jpeg', hoverImage: 'images/cars/toyotachr/3.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg'].map(f => 'images/cars/toyotachr/' + f), specs: ['Brand: Toyota CHR','Model: 2018','Import: 2021','Registration: Islamabad','Mileage: 108,042 KM','Color: White'], features: ['(AWD)','Automatic-Climate control','Parking sensors','Multimedia Screen','LED Headlamps','DRLS day time running lights','Alloy wheels','Multiple Air bags','ABS with EBD','Hybrid Powertrains','Auto dimming rear view mirror','Heated seats','Rain-sensing wipers'] },
  { id: 'bmw7series740le', name: 'BMW 7 Series 740 LE', brand: 'BMW', modelYear: 2017, status: 'new', mainImage: 'images/cars/bmw7series740le/1.jpeg', hoverImage: 'images/cars/bmw7series740le/3.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg'].map(f => 'images/cars/bmw7series740le/' + f), specs: ['Brand: BMW 7 Series 740 LE','Model: 2017','Import: Dewan Import','Registration: Islamabad','Mileage: 84,004 KM','Color: Mineral White Metallic'], features: ['Nappa Leather Upholstery','Comfort access system','Display key','Panoramic roof','Fineline High Gloss Trim','Massager Seats','Heads-Up-Display','Real Time Traffic info','Rear entertainment','Active-Pedestrian protection','Harman Kardon sound system','360 Camera','4-Zone Auto-Climate control','M-Sports steering wheel','Ambient Lights','M-Sports Alloy-Wheels'] },
  { id: 'ToyotaPradoVXL', name: 'Toyota Prado VXL', brand: 'Toyota', modelYear: 2016, status: 'new', mainImage: 'images/cars/ToyotaPradoVXL/1.jpeg', hoverImage: 'images/cars/ToyotaPradoVXL/3.jpeg', images: ['1.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg'].map(f => 'images/cars/ToyotaPradoVXL/' + f), specs: ['Brand: Toyota Prado VXL','Model: 2016','Import: 2017','Registration: Punjab','Mileage: 139,019 KM','Color: Black'], features: ['4.0 V6 Petrol Engine','Height-Control','All Electric Leather Seats','Front Memory seat','Auto-Climate Control','Wood-Trims','Sunroof','7 Seater','Multi-Media control on steering','Rare-Spec car'] },
  { id: 'bmwi8', name: 'BMW i8', brand: 'BMW', modelYear: 2014, status: 'new', mainImage: 'images/cars/BMW/BMWi8.jpg', hoverImage: 'images/cars/BMW/BMW.jpg', images: ['BMW.jpg','BMWi8.jpg','1.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg'].map(f => 'images/cars/BMW/' + f), specs: ['Brand: BMW i8','Model: 2014','Import: Dewan Import','Registration: Islamabad','Mileage: 143,441 KM','Color: Silver (PPF in white)'], features: ['1.5L 3 cylinder plug-in hybrid','Electric motor','Torque: 570 NM','Normal charger (AC): 4.5 hours','Fast charger (AC): 1.5 hour','Head-up display','Laser headlights','Carbon fiber reinforced plastic','Driving modes (Comfort, Eco, Sport)','Butterfly Doors','Premium Leather seats','LED ambient lighting','Digital instrument cluster'] },
  { id: 'gwagon', name: 'G Wagon EQ', brand: 'Mercedes', modelYear: 2024, status: 'new', mainImage: 'images/cars/Gweagon/21.jpg', hoverImage: 'images/cars/Gweagon/23.jpg', images: ['21.jpg','24.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','22.jpg','23.jpg'].map(f => 'images/cars/Gweagon/' + f), specs: ['Brand: G Wagon EQ G 580','Model: 2024','Import: 2025','Registration: Islamabad','Mileage: 13,000 KM','Color: Black'], features: ['G580 with EQ Technology (fully electric)','Luxury all-electric SUV (AWD)','Battery Capacity: 116 kWh','Power Output: ~587 hp','Torque: 1,164 Nm','0–100 km/h: 4.7 seconds','Top Speed: ~180 km/h','Range (WLTP): ~473 km per charge'] },
  { id: 'audia8l', name: 'Audi A8 L', brand: 'Audi', modelYear: 2015, status: 'sold', mainImage: 'images/cars/audia8l/audi1.jpg', hoverImage: 'images/cars/audia8l/audi2.jpg', images: ['audi1.jpg','audi2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg'].map(f => 'images/cars/audia8l/' + f), specs: ['Brand: Audi A8 L','Model: 2015','Mileage: 96,422 KM','Registration: Islamabad','Color: Black'], features: ['Design select','1/1 spec','4000cc V8 twin turbo','16 Speakers','Bang & Olufsen','Suction doors','Long wheel base','Night vision','Heads up Display','Adaptive Cruise control','All 4 seats massager','Rear entertainment','Intelligent matrix LED','Lane assist & park assist','Auto trunk','20 inch Alloy wheels','Alcantara roof liner','Dynamic air suspension'] },
  { id: 'audiA4Sline', name: 'Audi A4 Sline', brand: 'Audi', modelYear: 2016, status: 'sold', mainImage: 'images/cars/audiA4Sline/audiA4Shine.jpg', hoverImage: 'images/cars/audiA4Sline/audi.jpg', images: ['audiA4Shine.jpg','audi.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'].map(f => 'images/cars/audiA4Sline/' + f), specs: ['Brand: Audi A4 Sline','Model: 2016','Import: Audi Import','Registration: Islamabad','Color: Grey','Mileage: 88,702 KM'], features: ['2.0 TFSI engine','S line package headlights','High quality leather','3 zone climate control','Large infotainment screen','LED daytime running lights','Hexagonal single-frame grille','Sunroof','Digital meter cluster'] },
  { id: 'audiEtron', name: 'Audi Etron 55 Quattro', brand: 'Audi', modelYear: 2020, status: 'sold', mainImage: 'images/cars/audiEtron/audiEtron.jpg', hoverImage: 'images/cars/audiEtron/audiE.jpg', images: ['audiEtron.jpg','audiE.jpg','audiii.jpg','1.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'].map(f => 'images/cars/audiEtron/' + f), specs: ['Brand: Audi Etron 55 Quattro','Model: 2020','Import: 2024 UK Import','Mileage: 87,363 KM','Color: Black'], features: ['Panoramic Sunroof','4 zone climate control','Heated seats','Power adjustable seats','Ambient lighting','Heads-up-display','Wireless charging','Premium sound system','Matrix LED headlights','All ADAS Features'] },
  { id: 'sanata', name: 'Sonata Nline', brand: 'Hyundai', modelYear: 2025, status: 'sold', mainImage: 'images/cars/sanataNLine/SanataNline.jpg', hoverImage: 'images/cars/sanataNLine/snata.jpg', images: ['SanataNline.jpg','snata.jpg','1.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg'].map(f => 'images/cars/sanataNLine/' + f), specs: ['Brand: Sonata Nline','Model: 2025','Registration: Islamabad','Mileage: 49,000 KM','Color: Black'], features: ['290 hp turbo engine','422 Nm torque','8-speed DCT','Multiple drive modes','Heated/ventilated seats','Wireless charging','Sunroof','12.3″ curved cluster','Bose premium audio','Dual-zone climate','19″ alloys','Twin exhausts','LED lighting','6 airbags','Blind-spot','Lane assist','360° camera'] },
  { id: 'mgphev', name: 'MG PHEV', brand: 'MG', modelYear: 2025, status: 'sold', mainImage: 'images/cars/MGPhev/MG.jpg', hoverImage: 'images/cars/MGPhev/M.jpg', images: ['MG.jpg','M.jpg','1.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','10.jpg','11.jpg'].map(f => 'images/cars/MGPhev/' + f), specs: ['Brand: MG PHEV','Model: 2025','Registration: Islamabad','Mileage: 200 KM','Color: Black'], features: ['Digital meter','Panroof roof','Cruise control','Electric seats','272 Horse power','Climate control','ABS plus EBD','Green plug in hybrid technology'] },
  { id: 'mbenz', name: 'Mercedes Benz C180', brand: 'Mercedes', modelYear: 2018, status: 'sold', mainImage: 'images/cars/mercedeezbenz/mbenz.jpg', hoverImage: 'images/cars/mercedeezbenz/mb.jpg', images: ['mb.jpg','mbenz.jpg','1.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg'].map(f => 'images/cars/mercedeezbenz/' + f), specs: ['Brand: Mercedes Benz C180','Model: 2018','Import: Shahnawaz Import','Mileage: 103,641 KM','Color: White','Registration: Islamabad'], features: ['Classic package','Beige room','1.6cc turbo charged engine','Premium interior','Premium sound system','Dual zone climate control','Parking sensors','(RWD) drive','Sunroof','Advanced driver aids'] },
  { id: 'toyota', name: 'Toyota Prado TXL', brand: 'Toyota', modelYear: 2009, status: 'sold', mainImage: 'images/cars/toyyota/1.jpg', hoverImage: 'images/cars/toyyota/2.jpg', images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg'].map(f => 'images/cars/toyyota/' + f), specs: ['Brand: Toyota Prado TXL','Model: 2009','Import: 2013','Registration: Islamabad','Mileage: 131,146 KM','Color: White'], features: ['All Black room','Sunroof','All Electric Leather Seats','4.0 V6 Petrol engine','7 Seater','Power windows & mirrors','Multi-information display','Navigation system'] },
  { id: 'luxus', name: 'Lexus Ls 460', brand: 'Lexus', modelYear: 2007, status: 'sold', mainImage: 'images/cars/luxes/12.jpg', hoverImage: 'images/cars/luxes/10.jpg', images: ['12.jpg','10.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','11.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg'].map(f => 'images/cars/luxes/' + f), specs: ['Brand: Lexus Ls 460','Model: 2007','Mileage: 75,460 KM','Color: Matador Red Mica','Registration: Islamabad'], features: ['Full leather upholstery','Heated and ventilated seats','Massage seats','4-zone auto climate control','Mark Levinson premium sound system','Soft close door','Adaptive cruise control','Lane keep assist','Parking sensors','Sunroof moonroof','18-19 inch Alloy wheels'] },
  { id: 'porshe', name: 'Porsche Taycan', brand: 'Porsche', modelYear: 2021, status: 'sold', mainImage: 'images/cars/Porsche/1.jpg', hoverImage: 'images/cars/Porsche/2.jpg', images: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg'].map(f => 'images/cars/Porsche/' + f), specs: ['Brand: Porsche Taycan','Model: 2021','Mileage: 17,246 KM','Color: Satin Black'], features: ['Adaptive cruise control','Lane keep Assist & Lane change Assist','Parking sensors & 360 camera','Multiple Airbags','Stability & Traction control','Adaptive Air suspension','Panoramic roof','Bose premium sound system','Performance battery plus (93.4 kwh)','Porsche active suspension'] },
];

const PAGE_SIZE = 10;

export default function Inventory() {
  usePluginInit();

  const [activeTab, setActiveTab] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModelYear, setSelectedModelYear] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const brands = [...new Set(cars.map(c => c.brand))].sort();
  const modelYears = [...new Set(cars.map(c => c.modelYear))].sort((a, b) => b - a);

  const filteredCars = (() => {
    let result = [...cars];
    if (activeTab === 'new') result = result.filter(c => c.status === 'new');
    else if (activeTab === 'old') result = result.filter(c => c.status === 'sold');
    else if (activeTab === 'brand' && selectedBrand) result = result.filter(c => c.brand === selectedBrand);
    else if (activeTab === 'model' && selectedModelYear !== null) result = result.filter(c => c.modelYear === selectedModelYear);
    return result;
  })();

  const visibleCars = showAll ? filteredCars : filteredCars.slice(0, PAGE_SIZE);
  const hasMore = filteredCars.length > PAGE_SIZE && !showAll;

  const handleSetTab = (tab: string) => {
    setActiveTab(tab);
    setSelectedBrand('');
    setSelectedModelYear(null);
    setShowAll(false);
  };

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      {/* Breadcrumb */}
      <section className="bg-dark text-light relative jarallax">
        <div className="de-gradient-edge-top"></div>
        <img src="images/background/breadcrumb.png" className="jarallax-img" alt="" />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="spacer-double sm-hide"></div>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Inventory</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Inventory</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sw-overlay"></div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '30px 0 0' }}>
        <div className="container">
          <div className="inv-filter-tabs">
            {[
              { key: 'all', label: 'All Cars' },
              { key: 'new', label: 'New / Available' },
              { key: 'old', label: 'Sold' },
              { key: 'brand', label: 'By Brand' },
              { key: 'model', label: 'By Model Year' },
            ].map(tab => (
              <button
                key={tab.key}
                className={`inv-tab-btn${activeTab === tab.key ? ' active' : ''}`}
                onClick={() => handleSetTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'brand' && (
            <div className="inv-filter-chips mt-3">
              {brands.map(b => (
                <button
                  key={b}
                  className={`inv-chip${selectedBrand === b ? ' active' : ''}`}
                  onClick={() => { setSelectedBrand(b); setShowAll(false); }}
                >
                  {b}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'model' && (
            <div className="inv-filter-chips mt-3">
              {modelYears.map(y => (
                <button
                  key={y}
                  className={`inv-chip${selectedModelYear === y ? ' active' : ''}`}
                  onClick={() => { setSelectedModelYear(y); setShowAll(false); }}
                >
                  {y}
                </button>
              ))}
            </div>
          )}

          <div className="inv-results-meta mt-3 mb-2">
            <small className="text-muted">
              Showing {visibleCars.length} of {filteredCars.length} vehicles
            </small>
          </div>
        </div>
      </section>

      {/* Section Banner — shown when a specific tab is active */}
      {(activeTab === 'new' || activeTab === 'old') && (
        <section style={{ padding: '0 0 0' }}>
          <div className="container">
            <div className="inv-section-banner">
              {activeTab === 'new' && (
                <>
                  <span className="inv-section-badge inv-section-badge--new">AVAILABLE</span>
                  <h3 className="inv-section-title">New &amp; Available Cars</h3>
                  <p className="inv-section-sub">Browse our latest lineup of premium vehicles ready for you.</p>
                </>
              )}
              {activeTab === 'old' && (
                <>
                  <span className="inv-section-badge inv-section-badge--sold">SOLD</span>
                  <h3 className="inv-section-title">Sold Cars</h3>
                  <p className="inv-section-sub">A look at our previously sold vehicles — a testament to quality.</p>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Cars Grid */}
      <section>
        <div className="container">
          <div className="row g-4">
            {visibleCars.map(car => (
              <div key={car.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="inv-card">
                  <div className="inv-card__img-wrap">
                    {car.status === 'new' && <div className="inv-card__badge inv-card__badge--new">NEW</div>}
                    {car.status === 'sold' && <div className="inv-card__badge inv-card__badge--sold">SOLD</div>}
                    <a className="inv-card__img-link" data-bs-toggle="modal" data-bs-target={`#modalImages_${car.id}`} style={{ cursor: 'pointer' }}>
                      <img src={car.mainImage} alt={car.name} className="inv-card__img inv-card__img--main" />
                      <img src={car.hoverImage} alt={car.name} className="inv-card__img inv-card__img--hover" />
                    </a>
                    <div className="inv-card__overlay">
                      <i className="fa fa-images"></i>
                      <span>View Gallery</span>
                    </div>
                  </div>

                  <div className="inv-card__body">
                    <div className="inv-card__meta">
                      <span className="inv-card__brand">{car.brand}</span>
                      <span className="inv-card__year">{car.modelYear}</span>
                    </div>
                    <h5 className="inv-card__name">{car.name}</h5>
                    <ul className="inv-card__specs">
                      {car.specs.slice(0, 3).map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                    <div className="inv-card__actions">
                      <button className="inv-btn inv-btn--photos" data-bs-toggle="modal" data-bs-target={`#modalImages_${car.id}`}>
                        <i className="fa fa-camera me-1"></i> Photos
                      </button>
                      <button className="inv-btn inv-btn--details" data-bs-toggle="modal" data-bs-target={`#modalDetails_${car.id}`}>
                        <i className="fa fa-info-circle me-1"></i> Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Images Modal */}
                <div className="modal fade inv-images-modal" id={`modalImages_${car.id}`} tabIndex={-1}>
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{car.name} — Images</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body p-0">
                        <div id={`carousel_${car.id}`} className="carousel slide" data-bs-ride="carousel">
                          <div className="carousel-inner">
                            {car.images.map((img, i) => (
                              <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
                                <img src={img} className="d-block w-100" alt={car.name} />
                              </div>
                            ))}
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel_${car.id}`} data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target={`#carousel_${car.id}`} data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Modal */}
                <div className="modal fade" id={`modalDetails_${car.id}`} tabIndex={-1}>
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content inv-detail-modal">
                      <div
                        className="inv-detail-modal__header"
                        style={{ backgroundImage: `url(${car.mainImage})` }}
                      >
                        <div className="inv-detail-modal__header-overlay"></div>
                        <div className="inv-detail-modal__header-content">
                          <div className="inv-detail-modal__badges">
                            <span className={`inv-badge ${car.status === 'new' ? 'inv-badge--new' : 'inv-badge--sold'}`}>
                              {car.status === 'new' ? 'AVAILABLE' : 'SOLD'}
                            </span>
                            <span className="inv-badge inv-badge--brand">{car.brand}</span>
                            <span className="inv-badge inv-badge--year">{car.modelYear}</span>
                          </div>
                          <h4 className="inv-detail-modal__car-name">{car.name}</h4>
                        </div>
                      </div>
                      <div className="modal-body inv-detail-modal__body">
                        <div className="row g-4">
                          <div className="col-md-6">
                            <h6 className="inv-detail-modal__section-title">
                              <i className="fa fa-list-ul me-2"></i>Specifications
                            </h6>
                            <ul className="inv-spec-list">
                              {car.specs.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <h6 className="inv-detail-modal__section-title">
                              <i className="fa fa-star me-2"></i>Features
                            </h6>
                            <div className="inv-feature-grid">
                              {car.features.map((f, i) => (
                                <span key={i} className="inv-feature-pill">{f}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inv-detail-modal__footer">
                        <button className="inv-footer-btn inv-footer-btn--close" data-bs-dismiss="modal">Close</button>
                        <a className="inv-footer-btn inv-footer-btn--cta" href="tel:+923341111167">
                          <i className="fa fa-phone me-2"></i>Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-5">
              <button className="btn-main fx-slide" onClick={() => setShowAll(true)}>
                <span>Load More ({filteredCars.length - PAGE_SIZE} more)</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

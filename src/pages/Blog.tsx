import { Link } from 'react-router-dom';
import { usePluginInit } from '../hooks/usePluginInit';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
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
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Our Blog</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li className="active">Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sw-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            {blogPosts.map((post, i) => (
              <div key={post.slug} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(i % 3) * 0.2}s`}>
                <div className="bloglist h-100">
                  <div className="post-content">
                    <div className="post-image hover">
                      <Link to={`/blog/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="lazy hover-scale-1-1"
                          style={{ height: '220px', width: '100%', objectFit: 'cover' }}
                        />
                      </Link>
                      <div className="d-tagline">
                        <span className="p-tagline">{post.category}</span>
                      </div>
                    </div>
                    <div className="post-text p-3">
                      <span className="post-date">{post.date}</span>
                      <h4><Link to={`/blog/${post.slug}`}>{post.title}</Link></h4>
                      <p>{post.excerpt}</p>
                      <Link to={`/blog/${post.slug}`} className="btn-main fx-slide"><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-color text-light pt-60 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Have a question? Talk to our experts.</h3>
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

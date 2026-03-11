import { Link, useParams, useNavigate } from 'react-router-dom';
import { usePluginInit } from '../hooks/usePluginInit';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  usePluginInit();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    navigate('/blog');
    return null;
  }

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>

      <section className="bg-dark text-light relative jarallax">
        <div className="de-gradient-edge-top"></div>
        <img src="/images/background/breadcrumb.png" className="jarallax-img" alt="" />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="spacer-double sm-hide"></div>
              <span className="p-tagline mb-2 d-block">{post.category}</span>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">{post.title}</h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li className="active">{post.category}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sw-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <img src={`/${post.image}`} className="w-100 rounded-1 mb-4" alt={post.title} style={{ maxHeight: '450px', objectFit: 'cover' }} />
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="badge bg-color px-3 py-2 text-white fw-bold" style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>{post.category}</span>
                <span style={{ fontSize: '13px', opacity: 0.6 }}>{post.date}</span>
              </div>
              <div
                className="blog-read"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="spacer-single"></div>
              <Link to="/blog" className="btn-main fx-slide"><span>&larr; Back to Blog</span></Link>
            </div>

            <div className="col-lg-4">
              <div className="bg-dark-2 rounded-1 p-4 mb-4">
                <h5 className="mb-3">About AutoGemz</h5>
                <p className="mb-3">At AutoGemz, we redefine luxury on wheels. Trust, transparency, and top-tier service.</p>
                <a href="/contact" className="btn-main fx-slide w-100 text-center"><span>Contact Us</span></a>
              </div>

              <div className="bg-dark-2 rounded-1 p-4">
                <h5 className="mb-3">More Articles</h5>
                {otherPosts.map(p => (
                  <div key={p.slug} className="d-flex gap-3 mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                    <img src={`/${p.image}`} alt={p.title} className="rounded-1 flex-shrink-0" style={{ width: '70px', height: '60px', objectFit: 'cover' }} />
                    <div style={{ minWidth: 0, overflow: 'hidden' }}>
                      <span className="p-tagline d-block mb-1" style={{ fontSize: '11px' }}>{p.category}</span>
                      <Link to={`/blog/${p.slug}`} style={{ fontSize: '13px', lineHeight: '1.4', display: 'block', wordBreak: 'break-word' }}>{p.title}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color text-light pt-60 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Ready to experience AutoGemz?</h3>
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

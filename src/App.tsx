import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const productImage = `${import.meta.env.BASE_URL}nara-tee.png`;

const benefits = [
  {
    number: '01',
    title: 'A familiar mark, rethought',
    text: 'The Google wordmark moves to the chest: recognizable at a glance, considered in scale, and easy to make your own.',
  },
  {
    number: '02',
    title: 'Made for the in-between',
    text: 'For the commute, the coffee run, and the stretch of a day spent building what comes next.',
  },
  {
    number: '03',
    title: 'A first step into the field',
    text: 'An approachable way to wear the work you care about, whether you are starting out or already deep in it.',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="announcement">GOOD IDEAS LOOK GOOD ON YOU <span>✳</span> MADE FOR WHAT’S NEXT</div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Google Nara Tee home">Google<span className="wordmark-dot">.</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#story" onClick={closeMenu}>The idea</a>
          <a href="#details" onClick={closeMenu}>Details</a>
          <a href="#community" onClick={closeMenu}>Our community</a>
          <a className="nav-cta" href="#shop" onClick={closeMenu}>Meet the tee <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> THE NARA TEE · A NEW POINT OF VIEW</p>
          <h1>Wear what<br />you’re <span>building.</span></h1>
          <p className="hero-description">For the curious, the just-starting, and the always-making. A familiar Google mark, reimagined for the people shaping what comes next.</p>
          <a className="button button-dark" href="#shop">Discover the Nara Tee <ArrowUpRight size={17} /></a>
          <div className="hero-note"><span className="note-star">✳</span><span>For the next generation of makers<br />and everyone finding their way.</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-caption">THE NARA TEE <span>·</span> GOOGLE MERCH</div>
          <div className="product-card">
            <img src={productImage} alt="Deep brown Google Nara Tee with a small white chest wordmark" />
          <span className="image-stamp">NEW<br />PERSPECTIVE</span>
          <span className="price-stamp">$32 <small>USD</small></span>
          </div>
          <span className="visual-spark spark-one">✳</span>
          <span className="visual-spark spark-two">✳</span>
          <span className="visual-side-note">BUILT AROUND<br />WHAT’S NEXT</span>
        </div>
        <a href="#story" className="scroll-cue"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        <span className="hero-index">01 / 03</span>
      </section>

      <section className="manifesto" id="story">
        <div className="section-kicker"><span>01</span> A DIFFERENT KIND OF UNIFORM</div>
        <div className="manifesto-content">
          <h2>Less like a logo.<br /><span>More like a signal.</span></h2>
          <div className="manifesto-copy">
            <p>The Nara Tee starts with something familiar and gives it room to feel personal. A quiet wordmark. A rich, grounded color. A little more intention in the way it shows up.</p>
            <p>Because the people making the future don’t need a uniform. They need a starting point that feels like them.</p>
            <a className="text-link" href="#details">Why it works <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="manifesto-ribbon" aria-hidden="true"><span>MAKE ROOM FOR WHAT’S NEXT&nbsp; ✳ &nbsp;MAKE ROOM FOR WHAT’S NEXT&nbsp; ✳ &nbsp;MAKE ROOM FOR WHAT’S NEXT&nbsp; ✳ &nbsp;</span></div>
      </section>

      <section className="details" id="details">
        <div className="details-top">
          <div className="section-kicker light"><span>02</span> THE THINKING, IN THREAD</div>
          <h2>Small mark.<br /><em>Big energy.</em></h2>
          <p className="details-intro">A familiar name, placed with a lighter touch. The result is easy to reach for and open to interpretation.</p>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <article className="benefit" key={benefit.number}>
              <span className="benefit-number">{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
              <span className="benefit-plus">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="community" id="community">
        <div className="community-art"><div className="community-disc"><span>IDEAS<br />IN<br />MOTION</span><b>✳</b></div><span className="community-caption">WEST COAST · EVERYWHERE NEXT</span></div>
        <div className="community-copy">
          <div className="section-kicker"><span>03</span> FOR THE PEOPLE BUILDING IT</div>
          <h2>Find your<br />people. <span>Make<br />your mark.</span></h2>
          <p>From the first day on the job to the side project that won’t leave your mind, this one’s for a community always moving forward.</p>
          <a className="text-link" href="#shop">See what’s next <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="shop" id="shop">
        <div className="shop-orbit" aria-hidden="true">✳</div>
        <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT EVERYDAY FAVORITE</p>
        <h2>Make it<br /><span>your starting point.</span></h2>
        <p className="shop-copy">Meet the Google Nara Tee: a fresh take on a familiar favorite, made for the people building what’s next. Yours for $32.</p>
        <a className="button button-light" href="https://merch.google/" target="_blank" rel="noreferrer">Explore Google Merch <ArrowUpRight size={17} /></a>
        <p className="shop-footnote">$32 USD · Availability may vary.</p>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">Google<span className="wordmark-dot">.</span></a>
        <p>A little more you in what you wear.</p>
        <a href="#top" className="back-top">BACK TO TOP ↑</a>
        <span className="footer-legal">Product concept · Google Nara Tee</span>
      </footer>
    </main>
  );
}

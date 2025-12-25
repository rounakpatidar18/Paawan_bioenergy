import { useEffect } from "react";
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-content" data-aos="fade-right">
        <h1>
          POWERING THE FUTURE WITH <br />
          <span>SUSTAINABLE BIOENERGY</span>
        </h1>

        <p>
          Leading the transition to green industrial solutions through advanced
          bio-coal technology.
        </p>

        <div className="hero-actions">
          <a href="/products" className="btn btn-success btn-lg">
            Know More
          </a>
          <a href="/contact" className="btn btn-outline-light btn-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

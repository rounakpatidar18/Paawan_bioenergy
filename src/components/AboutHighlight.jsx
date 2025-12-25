export default function AboutHighlight() {
  return (
    <section className="about-highlight">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5" data-aos="fade-up">
            <div className="about-img-wrapper">
              <img
                src="/src/assets/images/about1.jpg"
                alt="About Pawan Bio Energy"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-md-7" data-aos="fade-left">
            <h2>WE ARE PAWAN BIO ENERGY</h2>
            <p>
              Dedicated to transforming waste into clean energy, we lead the
              industry in sustainable bio-coal manufacturing.
            </p>
            <p>
              Our mission is to provide eco-friendly alternatives to fossil fuels
              using renewable resources and advanced technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

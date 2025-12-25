export default function About() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Page Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Paawan Bio Energy</h1>
          <p className="text-muted">
            Driving sustainable energy through innovation and responsibility
          </p>
        </div>

        {/* Company Overview */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3>Who We Are</h3>
            <p>
              <strong>Paawan Bio Energy</strong> is a renewable energy company
              focused on producing eco-friendly bio-coal and biomass solutions.
              Our goal is to replace traditional fossil fuels with cleaner,
              sustainable alternatives.
            </p>
            <p>
              We work closely with industries to help them reduce carbon
              emissions while maintaining high efficiency and cost effectiveness.
            </p>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow-sm">
              <h5>Our Core Values</h5>
              <ul className="mb-0">
                <li>Sustainability & Environment Care</li>
                <li>Innovation in Renewable Energy</li>
                <li>Quality & Reliability</li>
                <li>Customer Satisfaction</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4>Our Mission</h4>
                <p>
                  To provide clean, renewable, and affordable bio-energy
                  solutions that support industries in reducing their
                  environmental impact.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4>Our Vision</h4>
                <p>
                  To become a leading bio-energy company contributing to a
                  greener, cleaner, and more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

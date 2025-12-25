export default function Sustainability() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Sustainability</h1>
          <p className="text-muted">
            Our commitment to a greener and cleaner environment
          </p>
        </div>

        {/* Content */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h3>Environmental Responsibility</h3>
            <p>
              At <strong>Pawan Bio Energy</strong>, sustainability is at the
              core of everything we do. Our bio-energy products help industries
              significantly reduce greenhouse gas emissions.
            </p>
            <p>
              We use renewable biomass sources that minimize waste and promote
              circular energy usage.
            </p>
          </div>

          <div className="col-md-6">
            <div className="bg-light p-4 rounded shadow-sm">
              <h5>Key Sustainability Benefits</h5>
              <ul className="mb-0">
                <li>Reduced carbon footprint</li>
                <li>Use of renewable resources</li>
                <li>Lower dependency on fossil fuels</li>
                <li>Cleaner industrial operations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>Clean Energy</h4>
                <p>
                  Promoting clean and renewable energy sources for industries.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>Waste Reduction</h4>
                <p>
                  Efficient use of agricultural and industrial biomass waste.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>Future Ready</h4>
                <p>
                  Supporting India’s transition towards sustainable energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

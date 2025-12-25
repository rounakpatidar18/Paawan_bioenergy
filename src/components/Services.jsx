const services = [
  {
    icon: "bi-plug-fill",
    title: "Renewable Energy Consulting",
    text: "Expert guidance on adopting bioenergy solutions"
  },
  {
    icon: "bi-recycle",
    title: "Biomass Processing",
    text: "Efficient conversion of organic matter into fuel"
  },
  {
    icon: "bi-truck",
    title: "Sustainable Logistics",
    text: "Optimized transport for minimal impact"
  },
  {
    icon: "bi-building",
    title: "Eco-Industrial Solutions",
    text: "Customized strategies for a greener future"
  }
];

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">SERVICES</h2>

        <div className="row">
          {services.map((s, i) => (
            <div
              className="col-md-6 col-lg-3 mb-4"
              data-aos="zoom-in"
              key={i}
            >
              <div className="service-card">
                <i className={`bi ${s.icon}`}></i>
                <h5>{s.title}</h5>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

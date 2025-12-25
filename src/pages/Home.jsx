import Hero from "../components/Hero";
import AboutHighlight from "../components/AboutHighlight";
import Services from "../components/Services";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutHighlight />
      <Services />

      <section className="products">
        <div className="container">
          <h2 className="section-title">OUR ECO-FRIENDLY SOLUTIONS</h2>

          <div className="row g-4">
            <ProductCard
              image="/src/assets/images/about.jpg"
              title="Premium Bio-Coal Pellets"
              desc="High-efficiency, low-emission fuel from sustainable biomass."
            />
            <ProductCard
              image="/src/assets/images/machine.jpg"
              title="Advanced Processing"
              desc="State-of-the-art eco-friendly production technology."
            />
            <ProductCard
              image="/src/assets/images/burner.jpg"
              title="Clean Industrial Power"
              desc="Reducing carbon footprint for a greener tomorrow."
            />
          </div>
        </div>
      </section>
    </>
  );
}

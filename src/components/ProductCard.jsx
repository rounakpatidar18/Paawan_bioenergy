export default function ProductCard({ image, title, desc }) {
  return (
    <div className="col-md-4" data-aos="fade-up">
      <div className="product-card">
        <img src={image} />
        <div className="product-info">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

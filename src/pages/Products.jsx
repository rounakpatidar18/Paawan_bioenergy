export default function ProductCard({ img, title, desc }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="product-card">
        <img src={img} alt={title} />
        <div className="product-content">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

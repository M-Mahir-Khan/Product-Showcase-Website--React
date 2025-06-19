function ProductCard({ product, isFavorite, onToggleFavorite ,darkMode}) {
  return (
   <div className="col-md-4 mb-4">
  <div
    className={`card h-100 shadow-sm border-0 ${darkMode ? "bg-secondary text-light" : ""}`}
    style={{ transition: "transform 0.3s", borderRadius: "1rem" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img src={product.image} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} alt={product.name} />
    <div className="card-body d-flex flex-column justify-content-between">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">₹{product.price}</p>
      <button
        className={`btn btn-sm ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
        onClick={() => onToggleFavorite(product.id)}
      >
        {isFavorite ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  </div>
</div>

  );
}

export default ProductCard;

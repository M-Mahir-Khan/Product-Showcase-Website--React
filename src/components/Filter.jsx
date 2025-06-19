function Filter({ categories, selectedCategory, onSelectCategory, darkMode }) {
  return (
    <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
      <button
        className={`btn btn-sm ${
          selectedCategory === "All"
            ? darkMode ? "btn-light" : "btn-dark"
            : darkMode ? "btn-outline-light" : "btn-outline-dark"
        }`}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          className={`btn btn-sm ${
            selectedCategory === cat
              ? darkMode ? "btn-light" : "btn-dark"
              : darkMode ? "btn-outline-light" : "btn-outline-dark"
          }`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;

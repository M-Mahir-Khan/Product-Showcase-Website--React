function Navbar({ darkMode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="#">ProductStore</a>
        <button
          className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
          onClick={toggleMode}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

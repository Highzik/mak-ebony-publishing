import '/src/index.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg css-navbar navigationBar">
        <div className='container'>
          <h4 className='header-logo'>Mak-Ebony Publishing</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbarSupportedContent " id="navbarNavDropdown">
            <button className='nav-btn col-lg-auto col-11'>Start Learning Now</button>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar
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
            <ul className="navbar-nav">
              <a className="nav-link" href="#home" data-bs-toggle="dropdown" title='Home'>
                Home
              </a>
              <li className="nav-item">
                <a className="nav-link" href="#services" title='Services'>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" title='About'>About</a>
              </li>
              <a className="nav-link" href="#blog" role="button" data-bs-toggle="dropdown" aria-expanded="false" title='Blog'>
                Blog
              </a>
              <li className="nav-item">
                <a className="nav-link" href="#contact" title='Contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav >

    </>
  )
}

export default Navbar
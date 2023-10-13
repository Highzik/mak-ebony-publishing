import '/src/styles/slideshow.css'
const SlideShow = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide container-fluid" data-bs-ride="carousel">
      <div className="carousel-inner container justify-content-center">
        <div className="carousel-item active">
          <img src="src/images/img-3.jpg" className="img-fluid logo-7" alt="" />
        </div>
        <div className="carousel-item">
          <img src="src/images/img-2.jpg" className="img-fluid logo-8" alt="" />
        </div>
        <div className="carousel-item">
          <img src="src/images/img-4.jpg" className="img-fluid logo-9" alt="" />
        </div>
      </div>
      <div className="container justify-content-center">
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default SlideShow
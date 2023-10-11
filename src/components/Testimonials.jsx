import { FaStar } from 'react-icons/fa'
import '/src/styles/testimonial.css'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

const Testimonials = () => {
  const articleRef = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal(({
      distance: '60px',
      duration: 2500,
      reset: true,
      easing: 'ease'
    }))
    sr.reveal(articleRef.current, { delay: 300, origin: 'left' })
  })
  return (
    <div className="container-fluid testimony-section">
      <div className="container" ref={articleRef}>
        <h2 className="mb-4 testimony">Testimonials</h2>
        <div className="row">
          <div className='col-lg-4 col-md-6 testimony-container'>
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <p className='about-company'>Mak-Ebony Publishing, based in Lagos, is a premier resource for aspiring accountants, providing high-qlaity, indispensable materials for those aiming to excel in their ICAN certification</p>
            <p className='writersAboutCompany'>Mary Bassey</p>
          </div>
          <div className='col-lg-4 col-md-6 testimony-container'>
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={unworkedIconStyle} />
            <FaStar style={unworkedIconStyle} />
            <p className='about-company'>Mak-Ebony Publishing, with its invaluable materials, illuminates the path for aspiring accountants in Lagos, shaping the future of ICAN certification </p>
            <p className='writersAboutCompany'>Blessing Odukoya</p>
          </div>
          <div className='col-lg-4 col-md-6 testimony-container'>
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={reactIconStyle} />
            <FaStar style={unworkedIconStyle} />
            <p className='about-company'>Mak-Ebony Publishing is an unparalleled treasure in Lagos, providing invaluable resources for budding chartered accountants to flourish</p>
            <p className='writersAboutCompany'>Kazeem Onashile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// this is to give the star the green color
const reactIconStyle = {
  color: ' #758E4F',
  fontWeight: 700,
  fontSize: '20px',
  marginRight: '5px',
  marginBottom: '15px'
}

//this is to allow the star maintain its default color
const unworkedIconStyle = {
  color: '#555',
  fontWeight: 700,
  fontSize: '20px',
  marginRight: '5px',
  marginBottom: '15px'
}

export default Testimonials
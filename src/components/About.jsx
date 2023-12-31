import '/src/styles/about.css'
import img2 from '../images/img-2.jpg'

const About = () => {
  return (
    <div className='container-fluid about-section'>
      <div className="container mb-4">
        <h2 className='about-header mb-2'>Boost your accounting career with us</h2>
        <p className='col-10 sub-text mb-1'>As a pioneering force headquartered in Lagos city, Mak-Ebony Publishing specialises in providing top-quality resources for aspiring accountancy students and committed individuals eager to get their ICAN accountancy certification. We take pride in our extensive selection of curated content that contributes significantly to the growth and success of future chartered accountants. Powered by educational excellence, Mak-Ebony Publishing actively leads the way in fostering financial literacy and accountancy proficiency</p>
        <button className='submit-btn-2'>Advance Accounting Expertise</button>
      </div>
      <div className='container text-center'>
        <img src={img2} alt="a lady typing on a laptop" className='img-fluid logo-5' />
      </div>
    </div>
  )
}

export default About
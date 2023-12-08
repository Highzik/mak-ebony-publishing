import '/src/styles/about.css'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal';
import img2 from '../images/img-2.jpg'

const About = () => {
  const articleRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal(({
      distance: '60px',
      duration: 2500,
      reset: true,
      easing: 'ease'
    }))
    sr.reveal(articleRef.current, { delay: 300, origin: 'left' })
    sr.reveal(imgRef.current, { delay: 300, origin: 'left' })
  })
  return (
    <div className='container-fluid about-section'>
      <div className="container mb-4" ref={articleRef}>
        <h2 className='about-header mb-2'>Boost your accounting career with us</h2>
        <p className='col-10 sub-text mb-1'>As a pioneering force headquartered in Lagos city, Mak-Ebony Publishing specialises in providing top-quality resources for aspiring accountancy students and committed individuals eager to get their ICAN accountancy certification. We take pride in our extensive selection of curated content that contributes significantly to the growth and success of future chartered accountants. Powered by educational excellence, Mak-Ebony Publishing actively leads the way in fostering financial literacy and accountancy proficiency</p>
        <button className='submit-btn-2'>Advance Accounting Expertise</button>
      </div>
      <div className='container text-center' ref={imgRef}>
        <img src={img2} alt="a lady typing on a laptop" className='img-fluid logo-5' />
      </div>
    </div>
  )
}

export default About
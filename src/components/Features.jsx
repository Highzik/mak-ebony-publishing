import '/src/styles/features.css'
import { useEffect, useRef, useState } from 'react'
import ScrollReveal from 'scrollreveal'

const Features = () => {
  // effect to make this section slide out from the bottom 
  const firstContainerRef = useRef(null);
  const secondContainerRef = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      reset: true,
      easing: 'ease'
    })
    sr.reveal(firstContainerRef.current, { delay: 300, origin: 'bottom' });
    sr.reveal(secondContainerRef.current, { delay: 300, origin: 'bottom' })
  })

  //this aspect is to control the state of the email input
  const [email, setEmail] = useState('');

  //this aspect is to control the sumbission of the email input
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='features contain-fluid'>
      {/* this is the section about the features and the images */}
      <div className="container mb-2" ref={firstContainerRef}>
        <h1 className='mb-2 feature-header'>Features</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-2 firstImgContainer">
            <img src="src/images/img-3.jpg" alt="pictures of coins" className='img-fluid w-100 h-100 logo-2 mb-1' />

            {/* I gave the same className for the paragraph because it aids the styling */}
            <p className='exam-preparations'>ICAN Exam Prep</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-2 secondImgContainer">
            <img src="src/images/img-4.jpg" alt="a lady typing on a laptop" className='img-fluid w-100 h-100 logo-3 mb-1' />

            {/* I gave the same className for the paragraph because it aids the styling */}
            <p className='exam-preparations'>Accounting Materials</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-2 thirdImgContainer">
            <img src="src/images/img-5.jpg" alt="two ladies close to each other" className='img-fluid w-100 h-100 logo-4 mb-1' />

            {/* I gave the same className for the paragraph because it aids the styling */}
            <p className='exam-preparations'>ICAN Certification Prep</p>
          </div>
        </div>
      </div>

      {/* This is the section for subscribing to newsletter */}
      <div className="text-center" ref={secondContainerRef}>
        <p className='text-subscription mb-1'>Subscribe to our newsletter</p>
        <p className='subtext-subscription'>Obtain our most recent news and updates</p>
        <div className="justify-content-center">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='email-2 col-6 mb-1' /><br />
            <input type="submit" value='Subscribe' className='subscribe-btn col-3' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Features
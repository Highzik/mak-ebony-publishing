import '/src/styles/contact.css'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

const Contact = () => {
  const article1Ref = useRef(null)
  const article2Ref = useRef(null)
  useEffect(() => {
    const sr = ScrollReveal(({
      distance: '60px',
      duration: 2500,
      reset: true,
      easing: 'ease'
    }))
    sr.reveal(article1Ref.current, { delay: 300, origin: 'left' })
    sr.reveal(article2Ref.current, { delay: 300, origin: 'right' })
  })
  return (
    <div className='container-fluid contact-section'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" ref={article1Ref}>
            <h2 className='contact-header mb-2'>Contact Mak-Ebony Today</h2>
            <p className='subContact-header mb-2'>Unlock your financial mastery with Mak-Ebony Publishing; reach out via our contact form today and let's simplify accounting together</p>
            <form>
              <input
                type="text"
                placeholder='First name'
                required
                className='col-12 mb-2 fname'
              />

              <input
                type="email"
                placeholder='Email'
                required
                className='col-12 mb-2 email'
              />

              <textarea
                rows="5"
                placeholder='Leave a message'
                className='col-12 textArea'>
              </textarea>
            </form>
            <input type="button" value="Send" className='mb-2 send-btn-3' />
          </div>
          <div className="col-lg-6" ref={article2Ref}>
            <img src="src/images/img-1.jpg" alt="a glass and a pen on a book" className='img-fluid logo-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
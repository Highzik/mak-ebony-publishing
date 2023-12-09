import '/src/styles/contact.css'
import img1 from '../images/img-1.jpg'
import { useState } from 'react'

const Contact = () => {
  //this is to be aware of the state of the inputs
  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className='container-fluid contact-section'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className='contact-header mb-2'>Contact Mak-Ebony Today</h2>
            <p className='subContact-header mb-2'>Unlock your financial mastery with Mak-Ebony Publishing; reach out via our contact form today and let's simplify accounting together</p>
            <form>
              <input
                type="text"
                placeholder='First name'
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className='col-12 mb-2 fname'
              />

              <input
                type="email"
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='col-12 mb-2 email'
              />

              <textarea
                rows="5"
                placeholder='Leave a message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='col-12 textArea'>
              </textarea>
              <input type="submit" value="Send" className='mb-2 send-btn-3' />
            </form>
          </div>
          <div className="col-lg-6">
            <img src={img1} alt="a glass and a pen on a book" className='img-fluid logo-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
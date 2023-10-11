import '/src/styles/home.css'
import { useState, useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal';

const Home = () => {
  // effect to make the images slide in from the bottom
  const imageRef = useRef(null);
  const articleRef = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      reset: true,
      easing: 'ease'
    })
    sr.reveal(imageRef.current, { delay: 300, origin: 'bottom' });
    sr.reveal(articleRef.current, { delay: 300, origin: 'bottom' });
  })

  //logic to notify the name and email of a customer
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //arrow function to handle click event
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section id='home' className='container-fluid home'>
      <div className="container">
        <div className="row">
          {/* image section */}
          <div className='col-md-12 col-lg-6' ref={imageRef}>
            <img src="src/images/img-6.jpg" alt="a phone and a notepad" className="logo-1 img-fluid h-100" />
          </div>

          {/* article section */}
          <div className='col-md-12 col-lg-6' ref={articleRef}>
            <h1 className='header text-center text-fluid'>Your gateway to ICAN accounting success</h1>
            <p className='sub-header text-center'>Empower your accounting education with Mak-Ebony Publishing - your source for top-notch ICAN certification materials and comprhensive study resources</p>

            {/* form section */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='First name'
                required
                className='fname mb-1 col-12'
              /><br />

              <input
                type="email"
                placeholder='Email'
                required
                className='email mb-1 col-12'
              /><br />

              <input
                type="button"
                value='Start Learning Now'
                className='submit-btn text-center col-lg-12' />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
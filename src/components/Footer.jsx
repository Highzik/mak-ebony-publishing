import '/src/styles/footer.css'
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
const Footer = () => {
  return (
    <div className='text-center footer-section'>
      <a href="http://osonowoolufemi11@gmail.com" className="mak-ebony">Mak-Ebony Publishing</a><br />
      <button title='twitter'><a href='https://www.twitter.com/username'><FaTwitter /></a></button>
      <button title='linkedIn'><a href='https://www.linkedin.com/in/username'><FaLinkedinIn /></a></button>
      <button title='instagram'><a href='https://www.instagram.com/username'><FaInstagram /></a></button>
      <button title='whatsapp'><a href='https://wa.me/08077711162'><FaWhatsapp /></a></button>
      <p>&copy; 2023 Mak-Ebony Publishing</p>
    </div>
  )
}

export default Footer
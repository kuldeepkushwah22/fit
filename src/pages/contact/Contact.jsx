import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


import './contact.css'

const Contact = () => {
  return (
   <>
   <Header title="Get In Touch" image={HeaderImage}>
    lIure officiis quaerat ipsa numquam voluptatibus eum itaque ducimus, accusantium recusandae suscipit natus odio tempore explicabo iusto consequatur dolorem?
   </Header>
   <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@egattor.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://m.me/ashish.jadoun.587" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+916398329272" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
   </section>
   </>
  )
}

export default Contact

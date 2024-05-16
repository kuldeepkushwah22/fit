import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {FaLinkedinIn} from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa"
import {AiOutlineTwitter} from 'react-icons/ai'
import { BsInstagram } from "react-icons/bs"
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, ducimus. Ipsum nulla similique eaque cumque quo, adipisci, eveniet commodi natus praesentium excepturi quibusdam ratione sit tempora quas expedita provident consequuntur.
    </Header>
   <section className="trainers">
    <div className="container trainers__container">
      {
        trainers.map(({id,image,name,job,socials})=>{
          return<Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon: <BsInstagram/>,link: socials[0]},
              {icon: <AiOutlineTwitter/>,link: socials[1]},
              {icon: <FaFacebook/>,link: socials[2]},
              {icon: <FaLinkedinIn/>,link: socials[3]}
            ]
          }/>
        })
      }
    </div>
   </section>
    </>
  )
}

export default Trainers

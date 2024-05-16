import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem debitis ea architecto vero fuga vel. Neque maxime, perspiciatis soluta, esse doloribus, impedit facilis cum ipsam adipisci aspernatur ratione facere! Doloribus.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium facere voluptatum dolorum nisi harum nulla, dolore enim voluptas itaque eos cum commodi blanditiis et doloribus maiores assumenda expedita numquam!
            </p>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sed molestiae sint, aliquid ipsa adipisci consequuntur ipsam. Quasi, eius repellat. Delectus libero illo quaerat voluptate dignissimos. Unde expedita dolores praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga asperiores vero quia pariatur temporibus vitae? Mollitia veritatis alias atque autem unde exercitationem quidem, quo perspiciatis architecto nihil, non commodi?
            </p>
          
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium facere voluptatum dolorum nisi harum nulla, dolore enim voluptas itaque eos cum commodi blanditiis et doloribus maiores assumenda expedita numquam!
            </p>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sed molestiae sint, aliquid ipsa adipisci consequuntur ipsam. Quasi, eius repellat. Delectus libero illo quaerat voluptate dignissimos. Unde expedita dolores praesentium.
            </p> 
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Story" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium facere voluptatum dolorum nisi harum nulla, dolore enim voluptas itaque eos cum commodi blanditiis et doloribus maiores assumenda expedita numquam!
            </p>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sed molestiae sint, aliquid ipsa adipisci consequuntur ipsam. Quasi, eius repellat. Delectus libero illo quaerat voluptate dignissimos. Unde expedita dolores praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga asperiores vero quia pariatur temporibus vitae? Mollitia veritatis alias atque autem unde exercitationem quidem, quo perspiciatis architecto nihil, non commodi?
            </p>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default About

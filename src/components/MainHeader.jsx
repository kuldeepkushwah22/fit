import { Link } from "react-router-dom"
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join thie legends of the fitness world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quis laudantium voluptas maxime nisi. Saepe quam dignissimos molestiae quas deserunt numquam perferendis culpa nostrum. Tenetur modi sit eius impedit earum!
          </p>
          <Link to="/plans" className="btn sm"> Get started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader

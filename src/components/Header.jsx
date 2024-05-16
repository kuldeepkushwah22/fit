

const Header = ({title, image, children}) => {
  return (
    <header className="header__container">
        <div className="header__container-bg">
            <img src={image} alt="Header Backgroung "/>
        </div>
        <div className="header__content">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </header>
  )
}

export default Header

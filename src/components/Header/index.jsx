import "./header.css"
import Logo from "../../assets/img/logo.png"

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="#" className="header-logo-link">
            <img src={Logo} alt="" className="header-logo" width={140} height={28} />
          </a>

          <div className="header-box">
            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <a href="#" className="header-item-link">
                  What is arcarta?
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                  Solutions
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                  Resources
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                  Contact
                  </a>
                </li>
                <li className="header-item">
                  <a href="#" className="header-item-link">
                  Login
                  </a>
                </li>
              </ul>
            </nav>
            <button className="header-btn">
            Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

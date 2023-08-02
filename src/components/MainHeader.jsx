import {Link} from "react-router-dom"
import Image from "../images/main_header.png"

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container main-header-container">
        {/* Left Side */}
        <div className="main-header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Unlock your potential. Embrace the burn. Conquer challenges. 
            Elevate fitness. Embody strength. Transform yourself. Persevere daily.
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>

        {/* Right Side */}
        <div className="main-header-right">
          <div className="main-header-circle" />
          <div className="main-header-image">
            <img src={Image} alt="main-header-img" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader

import React from 'react'

const Header = ({title, image, children}) => {
  return (
    <header className="header">
        <div className="container header-container">
            <div className="header-container-bg">
                <img src={image} alt="Header Background Pic" />
            </div>
            <div className="header-content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default Header
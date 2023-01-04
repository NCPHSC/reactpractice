import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <>
        <nav className="main-nav">
            <div className="logo">
                <h2>HARI</h2>
            </div>
            <div className="menu-link">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                
            </div>
            <div className="social-media">
                <ul>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank">Youtube</a>
                    </li>
                </ul>
            </div>
        </nav>
        <section>
            <h1>Welcome to our website.</h1>
        </section>
    </>
  )
}

export default Nav
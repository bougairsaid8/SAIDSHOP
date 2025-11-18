import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
        {/* logo for website */}
        <h1><span>FASHION</span>PRO</h1>

        {/* links for this website */}
        <div className='Links'>
            <ul>
                {/* link for home pages  */}
                <li>HOME</li>
                {/* link for CLOTHING */}
                <li>CLOTHING</li>
                {/* link for ACCESSORIES like {Shoes,Watches,...} */}
                <li>ACCESSORIES</li>
                {/* link for ABOUT , more information for this website  */}
                <li>ABOUT</li>
                {/* link for CONTACT , this page or section you can find more information if you x=want contact us */}
                <li>CONTACT</li>
            </ul>
        </div>

        {/* this for icons like Search and Shopping Cart */}
        <div className='IconsAction'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-heart"><span className='nbcart'>0</span></i>
            <i className="fa-solid fa-bag-shopping"><span className='nbcart'>0</span></i>
            <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

export default Header
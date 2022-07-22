import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { useState } from 'react'

import './navbar.scss'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => window.onscroll = null
  }

  return (
    <div className={isScrolled ? 'scrolled navbar' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Pizza_%2848496390846%29.jpg" alt="" />
          <div className="profile">
            <ArrowDropDown className='icon' />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './SideNav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SideNav = (props) => {

  return (
    <React.Fragment>
      <div
        className={!props.clicked ? 'container' : 'container change'}
      >
        <div className="button" onClick={props.click}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        </div>
      </div>
      <div className={props.clicked ? 'sidebar' : 'sidebar hidden'}>
        <div className="side-nav">
          <ul>
            <li>
            <AnchorLink href="#home" onClick={props.click}>Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#portfolio" onClick={props.click}>Portfolio</AnchorLink>
            </li>
            <li>
            <AnchorLink href="#about" onClick={props.click}>About</AnchorLink>
            </li>
            <li>
            <AnchorLink href="#contact" onClick={props.click}>Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      </React.Fragment>
  )
}

export default SideNav

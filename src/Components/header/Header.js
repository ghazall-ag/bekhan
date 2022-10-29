import React from 'react'
import Burger from './Burger'


function Header(props) {
  return (
      <div className='header'>
          
          <Burger/>
          
          <div className='header-title'><h2>{props.title}</h2></div>
    </div>
  )
}

export default Header
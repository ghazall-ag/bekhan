import React from 'react'
import spinner from '../assets/svg/Spinner-0.svg'
function Loader() {
  return (
      <div className='loader'>
          <img src={spinner} alt="loading" />
          <h2>در حال اتصال ...</h2>
    </div>
  )
}

export default Loader
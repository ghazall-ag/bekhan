import React from 'react'
import { Link } from 'react-router-dom'
//pic
import iconDownload from '../../assets/img/icn-sound.png'
import separator from '../../assets/img/separator.png'

function ItemSoreh({ sorehData,index }) {

  return (
    <>
      <div className='itemSoreh'>
      <Link to={`/sureh/${sorehData.id}/${sorehData.verses}`}>
        
        <img src={iconDownload} alt="download" />
        <div>{index+1}</div>
        <div>{sorehData.title}</div>
        <div>{sorehData.verses}</div>
        
        </Link>
          
    
         

    </div>
      <img src={separator} alt="separator" className='separator' />
      </>
  )
}

export default ItemSoreh
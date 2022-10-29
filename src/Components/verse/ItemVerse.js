import React ,{useState} from 'react'
import './verse.css'

import separator from '../../assets/img/separator.png'
import ItemPlayer from './ItemPlayer'
import styled from 'styled-components'
import verseimg from '../../assets/img/header-Name.png'
import iconDownload from '../../assets/img/icn-sound.png'

const DIV = styled.div`
    background-image:url(${verseimg});
    background-size: cover;
    padding: 20px 32px;
    margin:2px 10px;
    width: 70px;
    height: 70px;
   
` 

function ItemVerse({ VerseData , tablePosition}) {
  const [isSelected, SetIsSelected] = useState(false);
  const [isShow, setIsShow] = useState(true)
  

  const runPlayer = (e) => {
    
    SetIsSelected(true);
    
  }

  return (
    <>
      <div className='ItemVerse' >
          <div className='ItemVerse_partOne'>
              <h4 onClick={runPlayer}>{VerseData.title}</h4>
              <span>{VerseData.faTranslate}</span>
            </div>
          
     
        <DIV><span className='tablePosition'>{tablePosition+1}</span></DIV>
          
      </div>
      <img src={separator} alt="separator" className='separator' />
      {
        isSelected&&isShow&&
        <ItemPlayer VerseData={VerseData} tablePosition={tablePosition} />
        
      }
    
      
    </>
  )
}

export default ItemVerse
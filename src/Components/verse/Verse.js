import React, {useEffect,useState } from 'react'
import axios from "axios"
import './verse.css'
import ItemVerse from './ItemVerse'
import Loader from '../Loader'

import surahTitle from '../../assets/img/surah-title.png'
import { useParams } from 'react-router-dom'

import Header from '../header/Header';


const config = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoV1p5Y2tURFFOZEJNYXpPUXV1czZRPT0iLCJhdWQiOiJxakg1cUtmc0hHdk15dUFtTkk2UDc1UjJQZ1BGQ2hhV2pHZFdTWU1wYVNPeEdtOTZTVGh5RDBpQ0xMS3NUU1puIiwiZXhwIjoxNjU4MDk5NjUzLCJpYXQiOjE2NTgwODg4NTN9.Hhis6NfOsT3ltUMAMV3NpukBAL90vdzMeStjb77P-2C0HV9XDAOsrUdTuqzc1peIQrKnN4-_JzA4fWM_BAspGw',
        appdata:'eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0='
        
    }

}
function Verse() {
    const params = useParams();
  
    const id =params.id
    const verse =params.ps
    
    //get Api

    const BASE_URL_VERSE = `http://62.60.136.196:8061/api/v1/verse/surah/${id}?ps${verse}`

    const getVerse = async() => {

    const response =await axios.get(BASE_URL_VERSE, config);
    return response.data.results
    
}
//items
    const [items, setItems] = useState([]);

useEffect(() => {
    const fetchApiVerse = async() => {
      const data = await getVerse();
      setItems(data);
        console.log(data)

       
        
    

    }
    
fetchApiVerse()
}, [])
    
    const firstItem = items[0];
  
    return (
     <>
        {/* <Header  title={firstItem?.surahTitle}/> */}

        <div className='verse'>
            <div className='sureh-title'>               
             
          <h3>{firstItem?.surahTitle}</h3>
       
            </div>
            {
                items.length ?
                   items.sort((a, b) => a.item > b.item ? 1:-1).map((item,tablePosition) =>
                        <ItemVerse
                        key={item.id}
                        VerseData={item}
                        tablePosition={tablePosition}
                         />):
                     <Loader/>      

            }
            
        
            </div>
            </>
  )
}

export default Verse
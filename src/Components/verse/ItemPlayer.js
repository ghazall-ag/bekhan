import React, { useRef, useState,useEffect } from 'react'
import './ItemPlayer.css'
import { FaPlay ,FaPause,FaBackward,FaForward,FaRegBookmark,FaBookmark } from "react-icons/fa";
import { useConfig } from '../../Services/api'
import axios from "axios"
import { useParams } from 'react-router-dom'
import sample from '../../assets/sample.mp3'

function ItemPlayer({ VerseData, tablePosition }) {
  const [isplaying, SetIsplaying] = useState(false)
  const [isLike, setIsLike] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const config = useConfig();
  const [faSound, setFaSound] = useState()
  


  const modelTitle = encodeURIComponent(VerseData.surahTitle)
  const sourceId = VerseData.surahId
  // const modelTitle2 =encodeURIComponent(myUrl) 
  const index = tablePosition+1

  const BASE_URL_fa =`http://62.60.136.196:8061/api/v1/files/verse/quran/fa/${modelTitle}/${index}`
  const BASE_URL_ar = `http://62.60.136.196:8061/api/v1/files/verse/quran/ar/${modelTitle}/${index}`
  const favorite_URL = `http://62.60.136.196:8061/api/v1/favorite/add`

  
// const config = {
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoV1p5Y2tURFFOZEJNYXpPUXV1czZRPT0iLCJhdWQiOiJxakg1cUtmc0hHdk15dUFtTkk2UDc1UjJQZ1BGQ2hhV2pHZFdTWU1wYVNPeEdtOTZTVGh5RDBpQ0xMS3NUU1puIiwiZXhwIjoxNjU4MDk5NjUzLCJpYXQiOjE2NTgwODg4NTN9.Hhis6NfOsT3ltUMAMV3NpukBAL90vdzMeStjb77P-2C0HV9XDAOsrUdTuqzc1peIQrKnN4-_JzA4fWM_BAspGw',
//         appdata:'eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0='
        
//     }

// }



  //refrence
  
  const audioplayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();  // reference the animation

  const getSound = async () => {

    const response = await axios.get(BASE_URL_ar,  {
        responseType: 'arraybuffer',
        headers: {
           Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoV1p5Y2tURFFOZEJNYXpPUXV1czZRPT0iLCJhdWQiOiJxakg1cUtmc0hHdk15dUFtTkk2UDc1UjJQZ1BGQ2hhV2pHZFdTWU1wYVNPeEdtOTZTVGh5RDBpQ0xMS3NUU1puIiwiZXhwIjoxNjU4MDk5NjUzLCJpYXQiOjE2NTgwODg4NTN9.Hhis6NfOsT3ltUMAMV3NpukBAL90vdzMeStjb77P-2C0HV9XDAOsrUdTuqzc1peIQrKnN4-_JzA4fWM_BAspGw',
            appdata:'eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0=',
            'Content-Type': 'audio/mp3'
        }
      });
    return response.data
  }

  


    useEffect(() => {


    
      const fetchApiSound = async () => {
        const data = await getSound();
        const blob = new Blob([data], {
          type: 'audio/mp3'
      });
      const url = URL.createObjectURL(blob);    
        setFaSound(url);
        console.log(url)
      }
    
      fetchApiSound()
    
    
        
      
      const seconds = Math.floor(audioplayer.current.duration)
      progressBar.current.max = seconds;
      setDuration(seconds)



    }, [])

  

  
    //bookmark

    const handelBookmark = async () => {
    
      setIsLike(!isLike)
      //api
      const response = await axios.post(favorite_URL, {
        "model": {
        
          "sourceId": sourceId,
          "favType": false,
          "type": "QURAN",
          "metaDescription": index,
        }
    
      }, config);
    
      console.log(response.data)

    }


    

    //play&pause
    const togglePlayPause = () => {
    
      const prevValue = isplaying
      SetIsplaying(!prevValue)

      if (!prevValue) {
        audioplayer.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying)
      } else {
        audioplayer.current.pause();
        cancelAnimationFrame(animationRef.current)
      }
    }




    //progress 
    const changeProgress = () => {
      audioplayer.current.currentTime = progressBar.current.value
      changePlayerCurrentTime()
    }

    const whilePlaying = () => {
    
      progressBar.current.value = audioplayer.current.currentTime
      changePlayerCurrentTime()
      animationRef.current = requestAnimationFrame(whilePlaying)

    }

    const changePlayerCurrentTime = () => {
      progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
      setCurrentTime(progressBar.current.value);
    }
    ///forwardHandler
    const forwardHandler = () => {
    
    }
    ///backhandler
    const backhandler = () => {
    

    }

    return (
      <div className='audioplayer'>
        
        <audio  ref={audioplayer} src={faSound} type="audio/mp3" autoPlay/>

        {/* progress bar */}
        <div className='range'>
          <input ref={progressBar} type="range" defaultValue="0" onChange={changeProgress} />
        </div>


        {/* controller */}

        <div className='mainController'>
          {/* bookmark */}
          <div className='bookmark' onClick={handelBookmark}>{!isLike ? <FaRegBookmark /> : <FaBookmark />}</div>
       
      
          {/* main button */}
          <p onClick={forwardHandler}>{<FaForward />}</p>
          <p onClick={togglePlayPause} className="btn-play">{!isplaying ? <FaPlay /> : <FaPause />}</p>
          <p onClick={backhandler}>{<FaBackward />}</p>
     

          {/* speed */}
          <div className='speed'>1.0x</div>

        </div>
      </div>
    )
  }

export default ItemPlayer
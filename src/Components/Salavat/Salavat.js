import React, { useEffect, useState } from 'react'
import salavatPic from '../../assets/img/salavat.png'
import axios from 'axios';
import { useAuth } from '../../Contexts/AuthContext';

import {useConfig} from '../../Services/api'


import './Salavat.css'

const HomeURL = "http://62.60.136.196:8061/api/v1/home/mobile";
const TODO_URL = "http://62.60.136.196:8061/api/v1/dailytodoitem/add";
function Salavat() {


  //state
  const [salavat, setSalavat] = useState(0)
 
  const config = useConfig();

  useEffect(async() => {
    //  axios.get(Home_URL, config)
    //   .then(response => response.data)
    // console.log(response)

     await axios.get('http://62.60.136.196:8061/api/v1/home/mobile',config).then((res) => {
        setSalavat(res.data.salavatCount);
   
     })
    
    

  },[])
  
  const handelSalavat = async () => {
    
    setSalavat(prevSalavat => prevSalavat + 1)

    //api
     const response=await axios.post(TODO_URL, {
       "model": {
        "toDoId": 1,
      }
    
     }, config);
    
    console.log(response.data)
  

  }
  return (


    
  
    <div className='container'>
       
   
      <img src={salavatPic} alt="salavatshomar" />
      <div className='counter'>
      <div className='counter-main'><h2> {salavat} صلوات </h2> فرستاده شده </div></div>
      <button className='Button' onClick={handelSalavat}>صلوات</button>
    </div>
  )
}


export default Salavat
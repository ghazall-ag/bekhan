import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import './Login.css'

function Login() {

  const [number, setNumber] = useState("");
  const [sendOPT, setSendOTP] = useState();
  const [otp, setOtp] = useState("");
  const auth = useAuth();
  const location=useLocation()
  const navigate = useNavigate()
  const redirectPath = location.state?.path || '/'
// const OS = (window) => getOperatingSystem(window);
// const currentBrowser = (window) => getBrowser(window)
  
  const appdata = {
    "culture": "fa-IR",
    "platform": "PANEL",
    "imei": "",
    "store": "ADMINPANEL",
    "osVersion": "MacOS",
    "modelNumber": "",
    "deviceName": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "manufacturer": "Google Inc."
    
  }
  console.log('new', appdata)
  console.log(btoa('user:pass'))
     console.log('old','eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0=')
const newNumber=number.replace('0', '');






  const handleSubmit = async (e) => {

    await axios.post('http://quran.ammarion.org/api/v1/login', {
      username:`+98${newNumber}` ,
      password: "",
      type: "MOBILE",
      moduleType: "WEB"
    
    }, {
      headers: {
        appdata:'eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0='
        
       }
    });
    setSendOTP(true)

  }

  const handleOtpSubmit =async(e) => {
     const response=await axios.post('http://quran.ammarion.org/api/v1/activation', {
      username:`+98${newNumber}` ,
      code: otp,
      type: "MOBILE",
      moduleType: "WEB"
    
    }, {
      headers: {
        appdata:'eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0='
        
       }
    });
   
    const token=response.data.token
  
    auth.login(number, token, appdata)
    console.log(token)
 
    navigate(redirectPath, { replace: true })

    
  }
  return (
    <>
      {!sendOPT ?
        <div className='loginForm'>
          <h2>شماره همراه خود را وارد کنید</h2>
   
          <label>
            شماره موبایل:</label>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} required />
          
          <button onClick={handleSubmit}  className="button"> ورود</button>
      
        </div> :
         <div className='loginForm'>
          <h2>کد ارسال شده به گوشی خود را وارد کنید</h2>
   
          <label>
         کد ارسال شده :</label>
            <input type="text" value={otp} onChange={e => setOtp(e.target.value)} required />
          
          <button onClick={handleOtpSubmit}   className="button"> فعال سازی</button>
      
        </div>


     
      }
      
    </>
  )
}

export default Login
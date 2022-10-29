import axios from "axios"
import { useAuth } from "../Contexts/AuthContext"
//URL
const BASE_URL = "http://62.60.136.196:8061/api/v1/surah?ps=114"


const config = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoV1p5Y2tURFFOZEJNYXpPUXV1czZRPT0iLCJhdWQiOiJxakg1cUtmc0hHdk15dUFtTkk2UDc1UjJQZ1BGQ2hhV2pHZFdTWU1wYVNPeEdtOTZTVGh5RDBpQ0xMS3NUU1puIiwiZXhwIjoxNjU4MDk5NjUzLCJpYXQiOjE2NTgwODg4NTN9.Hhis6NfOsT3ltUMAMV3NpukBAL90vdzMeStjb77P-2C0HV9XDAOsrUdTuqzc1peIQrKnN4-_JzA4fWM_BAspGw',
        appdata:'eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0='
        
    }

}


const getSoreh = async() => {

    const response =await axios.get(BASE_URL, config);
    return response.data.results
    
}




export const useConfig = () => {
    
    const auth = useAuth();
    const token = auth.token;
    const appdata=auth.appdata
    
    if (auth.lenght < 0) {
        token='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoV1p5Y2tURFFOZEJNYXpPUXV1czZRPT0iLCJhdWQiOiJxakg1cUtmc0hHdk15dUFtTkk2UDc1UjJQZ1BGQ2hhV2pHZFdTWU1wYVNPeEdtOTZTVGh5RDBpQ0xMS3NUU1puIiwiZXhwIjoxNjU4MDk5NjUzLCJpYXQiOjE2NTgwODg4NTN9.Hhis6NfOsT3ltUMAMV3NpukBAL90vdzMeStjb77P-2C0HV9XDAOsrUdTuqzc1peIQrKnN4-_JzA4fWM_BAspGw'
        appdata='eyJjdWx0dXJlIjoiZmEtSVIiLCJwbGF0Zm9ybSI6IlBBTkVMIiwiaW1laSI6IiIsInN0b3JlIjoiQURNSU5QQU5FTCIsIm9zVmVyc2lvbiI6Ik1hY09TIiwibW9kZWxOdW1iZXIiOiI1LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEwMy4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiZGV2aWNlTmFtZSI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMDMuMC4wLjAgU2FmYXJpLzUzNy4zNiIsIm1hbnVmYWN0dXJlciI6Ikdvb2dsZSBJbmMuIn0='
    }
const config_user = {
    
    headers: {
        Authorization: `Bearer ${token}`,
        appdata:`${appdata}`
    }
    }
    
    return config_user
}


export { getSoreh }
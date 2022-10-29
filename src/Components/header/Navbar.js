import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../Contexts/AuthContext'


const Ul = styled.ul`
list-style:none;
display:flex;
flex-direction: column;
justify-content: right;
background-color:rgba(0, 0, 0, 0.281);
z-index: 15;
position:relative;
top: 0;
right: 0;
color:#fff;
height: 100vh;
width: 250px;
transition: all 0.4s linear;
transform:${(props) => props.open ? "translateY(0)" : "translateY(-100%)"};
  padding: 25px 20px;
  li{
    padding: 15px 20px;
    
        @media (max-width: 768px) {
        font-size:13px;
         }
  }
  @media (max-width: 768px) {
width:80%;
padding-top:30px;
  }




`

function Navbar({ open }) {


  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {


  }



  const auth = useAuth();
  const navigate = useNavigate();

  const handelLogOut = () => {
    
    auth.logOut()
    navigate('/')
  }
  return (
      <div>
           <Ul open={open}>
              <li  onClick={toggle}><Link to="/" >سوره ها </Link></li>
              {/* <li><Link to="/sojdeh">سجده ها </Link></li> */}
              <li><Link to="/favorite">علاقمندی ها </Link></li>
              <li><Link to="/salavat"> صلوات ها </Link></li>
              <li><Link to="/aboutus"> درباره ما </Link></li>
              <li><Link to="/setting"> تنظیمات </Link></li>
              
             
           {
          !auth.user ? <li><Link to="/login"> ورود به حساب کاربری</Link></li> :
             <li onClick={handelLogOut}><Link to="/" >خروج</Link></li>
           }
              
              
        </Ul>
    </div>
  )
}

export default Navbar
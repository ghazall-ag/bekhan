import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const BurgerStyle = styled.div`
width:2rem;
height:2rem;
cursor: pointer;
display: flex;
justify-content: space-around;
flex-direction: column;
z-index: 20;
position:absolute;
top:15px;
right:420px;
    div{
    width:2rem;
    height:0.25rem;
    background-color:#0b5c53;
    border-radius: 10px;
    transition: all 0.2s linear;
    transform-origin: 1px;

    &:nth-child(1){
        transform:${({ open })=>open ? "rotate(45deg)":"rotate(0)"};
    }
    &:nth-child(2){
        transform:${({ open }) => open ? "translateX(-100%)" : "translateX(0)"};
        opacity:${({open})=>open?0:1};
    }
    &:nth-child(3){
        transform:${({ open })=>open ? "rotate(-45deg)":"rotate(0)"};
    }

 
    }
     @media (max-width: 768px) {
       right: 0px;
    padding-right: 10px;
  }

`

function Burger() {

    const [open, setOpen] = useState(false)
    
  return (
      <>
          <BurgerStyle  open={open} onClick={() => setOpen(!open)}>
              
              <div></div>
              <div></div>
              <div></div>
          </BurgerStyle>
          <Navbar open={open} />
    </>
  )
}

export default Burger
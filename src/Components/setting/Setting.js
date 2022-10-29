import React, { useEffect, useState } from 'react'
import './Setting.css'

function Setting() {
  const [color, setColor] = useState({});
  const [size, setSize] = useState(14)


  useEffect(() => {
     
    // color
    const data1 = localStorage.getItem('color');

    if (data1) {
      setColor(data1);
      console.log("data1", data1)
      console.log('color:',color)
        document.documentElement.style.setProperty('--font-color',data1);
     }
    //  size
       const data2 = localStorage.getItem('size');

    if (data2) {
      setSize(JSON.parse(data2));
       document.documentElement.style.setProperty('--fontSizeMain',data2 +"px");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('size', JSON.stringify(size));
  }, [size]);

  useEffect(() => {
    localStorage.setItem('color',color);
  }, [color]);
 
  
  const changeColor=(e)=>{
    setColor(e.target.value)
    document.documentElement.style.setProperty('--font-color',color);
}
  const changeFontSizePlus=(e)=>{
    
    setSize(size+1)
    document.documentElement.style.setProperty('--fontSizeMain',size +"px");
}
  const changeFontSizeMinus=(e)=>{
    
    setSize(size-1)
    document.documentElement.style.setProperty('--fontSizeMain',size +"px");
}
  return (
    <div>

      <ul className='ul_Setting'>
        {/* Size-font */}
        <li className='li_Setting'>
          <div>اندازه متن</div>
          <div>
           <button className='btn_Change_Size'  onClick={changeFontSizePlus}>+</button>
          {size}
          <button  className='btn_Change_Size' onClick={changeFontSizeMinus}>-</button>
          </div>
        </li>

        {/* color-font */}
        <li  className='li_Setting'>
          <div>رنگ متن</div>
          <div> <input type="color" value={color} onChange={changeColor}  className="color_picker"/>
          </div>
        </li>
      </ul>
    </div>

  
  )

  {
    
  }
}

export default Setting
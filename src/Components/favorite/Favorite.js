import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useConfig } from '../../Services/api'
import Loader from '../Loader'
import FavoriteItem from './FavoriteItem'

import './Favorite.css'

function Favorite() {

  const config = useConfig();
  const [favItem, setFavItem] = useState([])
  
  
  useEffect(() => {
    

      axios.get('http://Quran.ammarion.Org/api/v1/favorite/byCustomer',config).then((res) => {
       setFavItem(res.data);
   
    })

  },[])
  

  return (
    <div>
     {
        favItem.length ?
          
          
          favItem.map(item =>
            <FavoriteItem
            key={item.id}
            FavData={item}
          
          />
          

            ) :
            <Loader/>
      }

     
    </div>
  )
}

export default Favorite
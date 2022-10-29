import React ,{useState,useEffect} from 'react'

//Api
import { getSoreh } from '../../Services/api'
//components
import Loader from '../Loader'
import ItemSoreh from './ItemSoreh'

function Main() {


  const [sorehs, setSorehs] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async() => {
      const data = await getSoreh();
      setSorehs(data);
      console.log(data)
    

    }
    
fetchApi()
  }, [])
  

  const searchHandler = (e) => {
    
    setSearch(e.target.value)
  }
 const SearchedSoreh=sorehs.filter(soreh =>soreh.title.includes(search))


  return (
    <>
      <title>سوره ها</title>
      <div  className='searchBox'>
        <input type="text" value={search} onChange={searchHandler} placeholder="جستجو..." />
      </div>
      <div>
      <div className='subject'>
         
        
        <img src="" alt="" />
        <div>شماره</div>
          <div>نام </div>
        <div>تعداد آیه</div>
        
    
          </div>
    
         

 
        
      {
        sorehs.length ?
          
          
          SearchedSoreh.map((soreh,index)=>
            <ItemSoreh
            key={soreh.id}
              sorehData={soreh}
              index={index}
          
          />
          

            ) :
            <Loader/>
      }

</div>

    </>
  )
}

export default Main
import { useState, useEffect }from 'react'
import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Starships = () => {

  const { data, isLoading, error, makeRequest }   = useRequestData();

  const [currentPage, setCurrentPage] = useState(0);

  const  [ isComplete, setIsComplete ]= useState(1)


  useEffect(()=> {
    makeRequest( "https://swapi.dev/api/starships/?page=" + currentPage )

  }, [ currentPage ])
  return (

    <div>
        <h1>  SWAPI - Starships </h1>

        { isLoading && <Loader/>}

            { error && <h2>Error ...</h2>}

            <button  onClick = {()=> setCurrentPage( currentPage -1 )} className='btn' disabled= { data?.previous}>Previous</button>
          
            <button onClick = {()=> setCurrentPage( currentPage  + 1 )} className='btn' disabled= { data?.next}>Next</button>
          
          <div>

            {  data && data.results.map ((s, i) =>
                <div key={"starship" + i}> 
                <h2>Starships {s.name}</h2>


                <ul>
                     <li> Model: {s.model}</li>
                     <li> Created: { new Date(s.created). toLocaleString ("da-DK", { year:"2-digit", month:"numeric" , hour: "2-digit", minute:"2-digit" }) }</li>
                
                </ul>
            </div>
            
            )
            }

          </div>

       
          
        
    </div>
  )
}

export default Starships




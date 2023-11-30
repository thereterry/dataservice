import { useState, useEffect }from 'react'
import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Todos = () => {

  const { data, isLoading, error, makeRequest }   = useRequestData();

  const  [ isComplete, setIsComplete ]= useState(null)
  // const  [ isComplete, setIsComplete ]= useState(false)

  useEffect(()=> {
    makeRequest("https://jsonplaceholder.typicode.com/todos")
  })
  return (
    <div>
      <h1> JSONPlaceholder- Data/endpoint "todos" </h1>

      { isLoading && <Loader/>}

        { error && <h2>Error ...</h2>}
        <button onClick={()=> setIsComplete(true)}> Vis alle udførte Todos</button>
        <button onClick={()=> setIsComplete(false)}>Vis alle afventede Todos</button>
        <button onClick={()=> setIsComplete(null)}>Vis alle Todos</button>


        <div>


          {  data && data.
          filter( t=> t.completed === isComplete
            ).map (t =>
          <div key={t.id}> 
            <h2>TODO {t.title}</h2>
            <p>Id: {t.id}</p>
            <p>Udfort: 
              <span className={t.completed}> { t.completed.toString() } </span>
            </p>
          </div>
            ) }
          
        </div>
    </div>
  )
}

export default Todos




import { useState, useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import ItemsPerPage from "../components/ItemsPerPage";
import PrevNext from "../components/PrevNext";






const Posts = () => {
  const { data, isLoading, error, makeRequest }   = useRequestData();

  //prev og next buttons "skift side"
  const [ itemsPerPage, setItemsPerPage] = useState(50);
  const [ currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    //funktion
    makeRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);



  // const sliceData = (dataToSlice) => {
    
  //   return dataToSlice.slice( (currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage) );
  // }
  

  return (
    <div>

      <h1>JSONPLACEholder - Posts</h1>

      { isLoading && <Loader/>}

      { error && <h2>Error ...</h2>}
      {console.log(data)}
      
      <ItemsPerPage setItemsPerPage={ setItemsPerPage } setCurrentPage={setCurrentPage} options={[5,10,20]} />

      {
        data &&
        <PrevNext setCurrentPage={ setCurrentPage } currentPage={currentPage}  dataLength= { data?.length } itemsPerPage = {itemsPerPage}options = { [5, 10, 50, 200] } />
      }

      <div>
          {[5, 10, 20, 100].map(o => (
            <button key={"btn" + o} className="btn" onClick={() => { setItemsPerPage(o); setCurrentPage(0); }}>
              {o} pr.side
            </button>
          ))}
      </div>  

  
{/* 
  <div>
    
  
      {
        [5,10,20,100].map(o => <button key={"btn + o"} className="btn" onClick={() => { setItemsPerPage (0); setCurrentPage(0) } }> { o } pr.side</button>)
      }

   
  

  </div> */}
     
  
      {
          data && 
          <>
           <button className="btn" onClick={ ()=> setCurrentPage(currentPage -1 ) } disabled={currentPage <= 0}>Prev</button>


          <button className="btn" onClick={ ()=> setCurrentPage(currentPage + 1) } disabled= { currentPage + 1 >= Math.ceil(data.length / itemsPerPage) }>Next</button>

           </>
       } 


    </div>
  );
};

export default Posts;

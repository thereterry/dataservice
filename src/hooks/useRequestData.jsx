import { useState } from "react";
import axios from "axios"; //import axios if there is a specific url


const useRequestData = () => {
  //condition/betingelser
  const [isLoading, setisLoading] = useState(false);

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  //async function
  const makeRequest = async (apiurl) => {

    setisLoading(true);

    //Kalder API /Call the API

    setTimeout(async () => {
      try {
        let response = await axios.get(apiurl);

        if (response.data) {
          setData(response.data);
          setError(null);
        } else {
          throw new Error("Tomt response/ingen data");
        }
      } catch (error) {
        console.log(error);
        setError("Der er opstået en fejl:" + error.message);
        setData(null);
      } finally {
        setisLoading(false);
      }
    }, 2000);
  };

  return { data, isLoading, error, makeRequest };
};

export default useRequestData;

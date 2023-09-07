import { useState, useEffect } from "react";
import axios from "axios";

const useFetch =(endpoint,query) => {

    const [data ,setData] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const [error , SetError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key':'93cd3b2491msh36e8d07efcb9793p1d42a6jsnf37fd592246c',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
      };

      
  


      const fetchData = async () => {
        SetIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            SetIsLoading(false);
        } catch (error) {
            SetError(error);
            alert("There is an error")
        } finally {
                SetIsLoading = false;
        }
      }


      useEffect(() => {
        fetchData();
      },[]);

      const refetch = () => {
        SetIsLoading(true);
        fetchData();
      }

      return { data , isLoading , error ,refetch }
}

export default useFetch;
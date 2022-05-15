import { useEffect, useState } from "react";
// import api from "api/api";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(()=>{
(async()=>{
setLoading(true)
     await axios.post(url)
      .then(res => setData(res.data))
      .catch(error => setError("ورود امکان پذیر نیست"))
  
})()
},[url])
return(data,loading,error)
}

  
//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(url, config);
//         setData(response);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [url]);

//   return { data, loading, error };
// };

export { useFetch };

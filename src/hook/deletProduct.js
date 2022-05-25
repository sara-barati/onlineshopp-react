import { useEffect, useState } from "react";
import {api} from "api/api"
export default function deletProduct(id){
    return api.delete(`/products/${id}`)
}
// const delay = () => {
//   return new Promise((resolve) => setTimeout(() => resolve("delay"), 3000));
// };

// const useFetchDelet = (url, config = {}) => {
//   const [datadelet, setDatadelet] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const response = await api.delete(url, config);
//         await delay();
//         setDatadelet(response);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [url]);

//   return { datadelet, loading, error };
// };

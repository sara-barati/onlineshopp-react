import { useEffect, useState } from "react";
import {api} from "api/api"
export default function formimg(data){
    return api.post(`/upload/`,data)
}

// const idproduct = id;
// fomimg(formdta);


// const response = await api.post(url, config);

// setData(response);

// postFormData(url, formData, config) {
//     return this.http.post(url, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       },
//       ...config
//     });
//   }
// }


// useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         const response = await api.get(url, config);
//         await delay();
//         setData(response);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [url]);


// post(url, data, config) {
//     return this.http.post(url, data, config);
//   }
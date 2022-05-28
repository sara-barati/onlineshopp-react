import { useEffect, useState } from "react";
import {api} from "api/api"
// export default function formimg(data){
//     return api.post(`/upload/`,data)
// }


export default function postform(formData){
    return api.postFormData(`/products/`,formData)
}



// postFormData(url, formData, config) {
//     return this.http.post(url, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       },
//       ...config
//     });
//   }
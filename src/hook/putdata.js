import { useEffect, useState } from "react";
import {api} from "api/api"


// put(url, data, config) {
//     return this.http.put(url, data, config);
//   }


  export default function putData(data,id){
    return api.put(`/products/${id}`,data)
}
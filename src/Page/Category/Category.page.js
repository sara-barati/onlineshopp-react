import React from 'react';
import axios from "axios";
import { useEffect,useState } from 'react';
import {api} from "api/api";
import { useFetch } from 'hook/useFetch';
import { Section } from 'Component/productSection/Section.component';
export default function Categorypage() {
  const [product, setProduct] = useState([]);
  const[category,setCategory]=useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const url = `http://localhost:3002/products`;
  const getData=()=>{
    axios({
      url: url,
      method: "get",

    })
      .then(function (response) {
        setProduct(response.data);
       
      })
      .catch(function (error) {
        console.log("error");
      });

  }
  useEffect(() => {
   getData()
  }, []);
  
  console.log(product);


  const urlCategory = `http://localhost:3002/category`;
  const getCategory=()=>{
    axios({
      url: urlCategory,
      method: "get",

    })
      .then(function (response) {
        setCategory(response.data);
       
      })
      .catch(function (error) {
        console.log("error");
      });

  }
  useEffect(() => {
    getCategory()
  }, []);
  console.log(category);
  // const { data, loading, error } = useFetch(
  //   `/category`
  //   );
  //   const category={data}
  // console.log(category);

  
  const sections = category.map(categoryy => {
    return (
        <Section limitness={false} id={categoryy.id} key={categoryy.id} title={categoryy.name}
                 data={product.filter(productt => +productt.category === categoryy.id)}/>
    )
})


return(<>
  {sections}
  </>
)}

  // useEffect(() => {
  //   axios({
  //     url: "http://localhost:3002/category",
  //     method: "get",
  //   })
  //     .then(function (response) {
  //       setcategorys(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log("error");
  //     });
  // }, []);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);
  //       const response = await api.get( url);
      
  //       setData(response);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [url]);
  
  // const { data, loading, error } = useFetch(
  //   `/products`
  // );

  
 

    // <>
    // {product.map(item=>{
    //   return(<h1>{item.name}</h1>)
     
    // })}
    // </>
  

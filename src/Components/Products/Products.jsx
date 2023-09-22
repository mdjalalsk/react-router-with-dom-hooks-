// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    //this ways use to react router dom  loader and useLoaderData for fetch 
    const {products}=useLoaderData();
    // console.log(products);
    // another ways to fetch for data using useState and useEffect 
    // const [products,setProduct]=useState([]);
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products')
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data));

    // },[])
    // console.log(products)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:mx-12 py-5 ">
           {
           products?.map(product=><Product key={product.id} product={product}></Product>)
           }
        </div>
    );
};

export default Products;
// "use client"
// import React, { useEffect, useState } from 'react'

const Products = async() => {
    // useEffect(()=>{
    //  getProducts()
    //  },[])



const getProducts=async()=>{
    let headers={Authorization:"Bearer 1b454a63398bc595e160e2dfcae01a74cbc7bab55a79dc1cc7152a203ea9a1dc8f05e29178c2291ecbd341265bd03adcd97f848b78d7ab0771aaf2c0053f704eb29ffe389cd0bb8cadb1af9192bebd1ed52c0d3319d56db3c5be56de5cb88b4e94276a6f5d93d1f04f3e3b3c49e2514493aee7a79a0485cf6067bfb0e798d41c"}
    let res=  await fetch("http://127.0.0.1:1337/api/products?populate=*",{headers})
    let products=await res.json()
    // console.log("wee",products)
    return products
}
const productsList=await getProducts() 
console.log("pr",productsList)

    return (
    <div>
     <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4">
    {productsList.data.map(ele=>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    )}
    </div>
  </div>
</section>
    </div>
  )
}


   

export default Products

const filterByName=(name,product)=>{
    const filteredProducts= product.filter(p=>
        p.title.toLowerCase().includes(name.toLowerCase())
     )
     return filteredProducts
  }

  const filterByCategory=(category,product)=>{
   if (category==="all") return product
    const filteredProducts= product.filter(p=>
       p.category.toLowerCase()===category
     )
     return filteredProducts
  }



  export {filterByName,filterByCategory}
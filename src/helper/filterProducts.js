const filterByName=(name,products)=>{
   if (!name) return products
    const filteredProducts= products.filter(p=>
        p.title.toLowerCase().includes(name.toLowerCase())
     )
     return filteredProducts
  }

  const filterByCategory=(category,products)=>{
   if (!category) return products
    const filteredProducts= products.filter(p=>
       p.category.toLowerCase()===category
     )
     return filteredProducts
  }



  export {filterByName,filterByCategory}
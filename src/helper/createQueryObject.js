const createQueryObject=(currentQuery,newQuery)=>{
    if(newQuery.search===""){
        const{search,...rest}=currentQuery
        return rest
    }
    if(newQuery.category==="all"){
        const{category,...rest}=currentQuery
        return rest
    }
    return{...currentQuery,...newQuery}
    
}

export {createQueryObject}
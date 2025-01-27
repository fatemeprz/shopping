const shortTitle=(title)=>{
   const shortenTitle= title.split(" ").slice(0,4).join(" ")
   return shortenTitle
}



export  {shortTitle}
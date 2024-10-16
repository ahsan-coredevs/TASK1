
export const storeData = (target, data) => {
  try {
   
    const isFound = localStorage.getItem(target);
    if(!isFound) {
      localStorage.setItem(target, JSON.stringify([data]));
      return true
    }
    else {
      const stored_data = JSON.parse(isFound);
      stored_data.push(data);
      localStorage.setItem(target, JSON.stringify(stored_data));
      return true

    }
   
  } catch (error) {
    console.error("Error storing form data:", error);
    return false
  }
};


export const fetchData= (target)=>{
  const isFound=  localStorage.getItem(target); 
  return isFound? JSON.parse(isFound): []
  
}


export const deleteItem= (target, index)=>{

}
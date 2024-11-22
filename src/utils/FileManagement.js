import { toast } from "react-toastify";

export const addToCart = async (data) => {
  try {
    let cart = JSON.parse(localStorage.getItem('cartlist'));
    if (!cart) {
      cart = [data];
    }
    else {
      const isCourseInCart = cart.find(c => c._id === data._id);
      if (!isCourseInCart) {
        cart.push(data);
      }
      else return toast.success('Item already exist in cart');

    }
    localStorage.setItem('cartlist', JSON.stringify(cart));
    toast.success('Item Added to cart');

  } catch (error) {
    console.error("error", error);
    return false
  }
};

export const deleteFromCart = async (c_id) => {
  try {
    const cartlist = JSON.parse(localStorage.getItem('cartlist'));
    if (cartlist) {
    
     const filtered_data = cartlist.filter(c=>c._id!==c_id)
      localStorage.setItem('cartlist', JSON.stringify(filtered_data));
    }
  } catch (error) {
    console.error("error", error);
    return false;
  }
}






export const storeData = (target, data) => {
  try {
    const isFound = localStorage.getItem(target);
    if (!isFound) {
      localStorage.setItem(target, JSON.stringify([data]));
      return true;
    }
    else {
      const stored_data = JSON.parse(isFound);
      stored_data.push(data);
      localStorage.setItem(target, JSON.stringify(stored_data));
      return true;

    }

  } catch (error) {
    console.error("Error storing form data:", error);
    return false
  }
};


export const fetchData = (target) => {
  const isFound = localStorage.getItem(target);
  return isFound ? JSON.parse(isFound) : []

}

export const deleteItem = (target) => {

  try {
    const isFound = localStorage.getItem(target);
    if (isFound) {
      const stored_data = JSON.parse(isFound);
      stored_data.splice(target.id, 1);
      localStorage.setItem(target, JSON.stringify(stored_data));
    }
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

export const editItem = (target, id, newData) => {

  try {
    const isFound = localStorage.getItem(target);
    if (isFound) {
      const stored_data = JSON.parse(isFound);
      stored_data[target.id] = newData;

      localStorage.setItem(target, JSON.stringify(stored_data));
      return true
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    return false
  }
}
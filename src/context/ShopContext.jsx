//import React hooks, products data, w toast notifications  
import { createContext, useEffect, useState } from "react";  
import { products } from "../assets/assets";  
import { toast } from "react-toastify";  

// Creating context dyal shop  
export const ShopContext = createContext();  

const ShopContextProvider = (props) => {  
  // Defining constants w states  
  const currency = "MAD"; // L3omla li ghadi nakhdmo biha f shop  
  const delivery_fee = 10; // Flat delivery fee li ghadi nzido  
  const [search, setSearch] = useState(""); // L'input dyal search  
  const [showSearch, setShowSearch] = useState(false); // Bash nbyno wla nkhbiw search bar  
  const [cartItems, setCartItems] = useState({}); // State li kat7tafed b cart  

  // Fonction dyal addToCart  
  const addToCart = async (itemId, size) => {  
    // Check wach user 3ammar size  
    if (!size) {  
      toast.error("Select Product Size"); // Notification error
      return;
    } else {  
      toast.success("Product added to cart"); // Notification success  
    }  

    // Kan-cloniw data dyal cart bach mab9ash kanmodify directly  
    let cartData = structuredClone(cartItems);  

    if (cartData[itemId]) {  
      // Wach l-item kayna f cart  
      if (cartData[itemId][size]) {  
        // Wach kayna size deja, kanzido 1  
        cartData[itemId][size] += 1;  
      } else {  
        // Ila ma kaynach, kanstartiw b 1  
        cartData[itemId][size] = 1;  
      }  
    } else {  
      // Ila item ma kaynach f cart, kanaddiw m3a size w quantity  
      cartData[itemId] = {};  
      cartData[itemId][size] = 1;  
    }  

    // Update dyal state dyal cart  
    setCartItems(cartData);  
  };  

  // Fonction li kat-return total items  
  const getCartCount = () => {  
    let totalCount = 0;  
    // Kan-loopiw f cart bach nhseb total  
    for (const items in cartItems) {  
      for (const item in cartItems[items]) {  
        try {  
          if (cartItems[items][item] > 0) {  
            totalCount += cartItems[items][item];  
          }  
        } catch (error) {  
          console.log(error); // Log error ila wa9a chi mochkil  
        }  
      }  
    }  
    return totalCount; // Return total count  
  };  

  // Fonction li kat-return total amount dyal items f cart  
  const getCartAmount = () => {  
    let totalAmount = 0;  
    for (const items in cartItems) {  
      let itemInfo = products.find((product) => product._id === items);  
      for (const item in cartItems[items]) {  
        try {  
          if (cartItems[items][item] > 0) {  
            totalAmount += itemInfo.price * cartItems[items][item];  
          }  
        } catch (error) {  
          console.log(error);  
        }  
      }  
    }  
    return totalAmount; // Return total amount  
  };  

  // Hna kan-monitoriw changes dyal cartItems  
  useEffect(() => {  
    console.log(cartItems); // Kan-affichiwn state dyal cart  
  }, [cartItems]);  

  // Update quantity dyal item f cart  
  const updateQuantity = async (itemId, size, quantity) => {  
    let cartData = structuredClone(cartItems);  
    cartData[itemId][size] = quantity;  
    setCartItems(cartData);  
  };


  const [choice,setChoice]=useState("")


    const HandleChoices=(value)=>{
      setChoice(value)
    }


    
  
  // Lvalues dyal context li ghadi nkhdm bihom fles composants  
  const value = {  
    products,  
    currency,  
    delivery_fee,  
    search,  
    setSearch,  
    showSearch,  
    setShowSearch,  
    cartItems,  
    addToCart,  
    getCartCount,  
    updateQuantity,  
    getCartAmount,
    setChoice,choice,HandleChoices  
  }; 
  
  

  // Wrapping children components f ShopContext.Provider  
  return (  
    <ShopContext.Provider value={value}>  
      {props.children}  
    </ShopContext.Provider>  
  );  
};  

export default ShopContextProvider;  

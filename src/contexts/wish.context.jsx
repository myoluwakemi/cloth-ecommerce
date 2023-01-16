import { createContext, useState } from "react";

//helper function

const addItemToWishList = (wishItems, wishToAdd) => {
  const existingWishItem = wishItems.find(
    (wishitem) => wishitem.id === wishToAdd.id
  );
  
  if (existingWishItem) {
    return (wishItems.map((wishitem) => 
        wishitem.id === wishToAdd.id? wishitem : wishitem
    ))
  }
  return [...wishItems, {...wishToAdd}]
};
const removeWish = (wishItems, wishToAdd)=> {
     wishItems.filter((wishItem) => wishItem.id !== wishToAdd.id);
}

export const WishContext = createContext({
  wishList: [],
  addToWishList: () => {},
  removeFromWishList: () => {},
 

});

export const WishContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  

  const addToWishList = (productToAddToWish) => {
    setWishList(addItemToWishList(wishList, productToAddToWish));

  };
  const removeFromWishList =(productToRemoveFromWish)=> {
    setWishList(removeWish(wishList, productToRemoveFromWish))
  }

  const value = {
    addToWishList,
    wishList,
    removeFromWishList

  };
  return <WishContext.Provider value={value}>{children}</WishContext.Provider>;
};

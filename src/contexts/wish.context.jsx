import { createContext, useState } from "react";

//helper function

const addItemToWishList = (wishItems, wishToAdd) => {
  const existingWishItem = wishItems.find(
    (wishitem) => wishitem.id === wishToAdd.id
  );
  
  if (existingWishItem) {
    return (wishItems.map((wishitem) => 
        wishitem.id === wishToAdd.id?  wishitem : wishitem
    ))
  }
  return [...wishItems, {...wishToAdd}]
};

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

  const value = {
    addToWishList,
    wishList
  };
  return <WishContext.Provider value={value}>{children}</WishContext.Provider>;
};

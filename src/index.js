import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./configs/i18n";
import { UserProvider } from "./contexts/user.context";
import { ProductProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart.content";

import "./index.scss";
import "./assests/scss/main.scss";
import "./assests/scss/sidebar.scss";
import reportWebVitals from "./reportWebVitals";
import { SearchProvider } from "./contexts/search-context";
import { WishContextProvider } from "./contexts/wish.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <WishContextProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
            </WishContextProvider>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

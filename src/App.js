import { useState, lazy, Suspense } from "react";
import { ThemeContext } from "./contexts/theme-context";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";


const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/Shop/shop.component"));
const CheckOut = lazy(() => import("./routes/checkout/checkout.component"));
const WishList = lazy(() => import("./routes/WishList"));
const Login = lazy(() => import("./routes/Login"));
const Register = lazy(() => import("./routes/Register"));
const Layout = lazy(() => import("./routes/Layout"));
const ProductDetails = lazy(() => import("./routes/productDetails"));
const NotFound = lazy(()=> import ("./routes/NotFound")
)
const App = () => {
  const isBrowserDefaulDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaulDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  return (
    <Suspense fallback={<Loader/>}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme}`}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="wishlist" element={<WishList />} />

              <Route path="checkout" element={<CheckOut />} />
              <Route path="product/:id" exact element={<ProductDetails />} />

              {/* <Route path="auth" element={<Authentication />} /> */}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/loading" element={<Loader />} />
          </Routes>

        </div>
      </ThemeContext.Provider>
    </Suspense>
  );
};

export default App;

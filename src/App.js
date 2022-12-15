import { useState } from "react";
import { ThemeContext } from "./contexts/theme-context";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Layout from "./routes/Layout";
import Shop from "./routes/Shop/shop.component";
import Authentication from "./routes/authentication/authentication.components";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
      </div>

  </ThemeContext.Provider>
  )
  
  };

export default App;

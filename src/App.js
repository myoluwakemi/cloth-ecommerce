import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Layout from "./routes/Layout";
import Shop from "./routes/Shop/shop.component";
import Authentication from "./routes/authentication/authentication.components";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
);

export default App;

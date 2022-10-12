import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Shop from "./routes/Shop/shop.component";
import Authentication from "./routes/authentication/authentication.components";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='auth' element={<Authentication/>}/>
    </Route>
  </Routes>
 
);

export default App;

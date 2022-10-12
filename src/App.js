import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Shop from "./routes/Shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.components";

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='sign-in' element={<SignIn/>}/>
    </Route>
  </Routes>
 
);

export default App;

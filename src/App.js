import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipment from './Components/Shipment/Shipment';
import SinglePageFood from './Components/SinglePageFood/SinglePageFood';
import Login from './Pages/Authentication/Login/Login';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/food/:singleId" element={<SinglePageFood />}></Route>
        <Route path="/shipment" element={<RequireAuth>
          <Shipment />
        </RequireAuth>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

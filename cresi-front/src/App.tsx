import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Profile from "./pages/profile"
import Home from "./pages/home"
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Connection from './pages/connection'
import Account from './pages/account'
import Offers from './pages/offers'
import Candidacy from './pages/candidacy'

function App() {
  return (
    <body>
      <header>
        <Navbar />
      </header>

      <div className="Cresi">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/connection' element={<Connection />} />
          <Route path='/account' element={<Account />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/candidacy' element={<Candidacy />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;

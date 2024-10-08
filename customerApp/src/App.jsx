import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import CustomersDetails from './pages/CustomersDetails';
import CustomersInfo from './pages/CustomersInfo';
import CustomersSales from './pages/CustomersSales';
import Navbar from './components/Navbar';
import { UserProvider } from './UserContext';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  const commandProps = {
    customerName : "Murtaza",
    customerGender : "Male",
    customerBorn : new Date().getFullYear()
  };

  return (
    <UserProvider>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/customers" element={<Customers {...commandProps} />} />
        <Route path="/customersDetails" element={<CustomersDetails {...commandProps}/>} />
        <Route path="/customersInfo" element={<CustomersInfo {...commandProps}/>} />
        <Route path="/customersSales" element={<CustomersSales {...commandProps}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
     </Router>
    </UserProvider>
  );
};



export default App;

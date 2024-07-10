
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Stores';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import AdminDashboard from './Pages/Admindashboard';
import AgentDashboard from './Pages/Agentdashboard';
import ClientDashboard from './Pages/Clientdashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<PrivateRoute component={AdminDashboard} />} />
                <Route path="/agent" element={<PrivateRoute component={AgentDashboard} />} />
                <Route path="/client" element={<PrivateRoute component={ClientDashboard} />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;

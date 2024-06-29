import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/index.jsx';
import ChatRoom from './components/ChatRoom/index.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<ChatRoom/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

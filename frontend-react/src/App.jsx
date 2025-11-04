import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersList from './pages/Users/UsersList';
import CreateUser from './pages/Users/CreateUser';
import UserDetail from './pages/Users/UserDetail';
import EditUser from './pages/Users/EditUser';

const App = () => {
  return (
    <Routes>
      <Route path="/users/list" element={<UsersList />} />
      <Route path="/users/create" element={<CreateUser />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/users/:id/edit" element={<EditUser />} />
    </Routes>
  );
};

export default App;

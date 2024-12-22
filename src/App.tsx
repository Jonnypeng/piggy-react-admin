import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout/index';

const App: React.FC = () => {
  return (
    <Router>
      <AdminLayout />
    </Router>
  );
};

export default App;

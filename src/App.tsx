import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; // Adjust the import path as needed
import AutoFilter from './pages/AutoFilter';
import GenericDialog from './pages/GenericDialog';
import LocalStorage from './pages/LocalStorage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/auto-filter' element={<AutoFilter />} />
          <Route path='/generic-dialog' element={<GenericDialog />} />
          <Route path='localstorage' element={<LocalStorage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

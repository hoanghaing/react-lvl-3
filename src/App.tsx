import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AutoFilter from '@/pages/AutoFilter';
import GenericDialog from '@/pages/GenericDialog';
import LocalStorage from '@/pages/LocalStorage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LocalStorage />} />
          <Route path='/auto-filter' element={<AutoFilter />} />
          <Route path='/generic-dialog' element={<GenericDialog />} />
          <Route path='/local-storage' element={<LocalStorage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

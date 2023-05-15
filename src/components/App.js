import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Workspace } from './Workspace/Workspace';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/:idItem" element={<Workspace />} />
      </Route>
    </Routes >
  );
}

export default App;

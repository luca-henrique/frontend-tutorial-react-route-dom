import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home} from '../components/Home';
import {About} from '../components/About';
import {Menu} from '../components/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

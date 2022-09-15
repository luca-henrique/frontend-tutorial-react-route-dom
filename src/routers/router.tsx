import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home} from '../components/Home';
import {About} from '../components/About';
import {Menu} from '../components/Menu';
import {Post} from '../components/Post';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<Post />} />

        <Route path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

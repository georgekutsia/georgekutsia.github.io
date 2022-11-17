import { Frontpage, Contact } from './screens'
import { Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route  path="/" element={<Frontpage/>} /> 
        <Route  path="/contact" element={<Contact/>} /> 
    </Routes>
    </div>
  );
}

export default App;

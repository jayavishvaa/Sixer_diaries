import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Signup/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
